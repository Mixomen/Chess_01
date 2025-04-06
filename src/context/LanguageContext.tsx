import React, { createContext, useState, useEffect, useContext } from 'react';
import { translations, Language, getBrowserLanguage, defaultLanguage } from '../locales';

// 定义语言上下文类型
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, section?: string) => string;
}

// 创建语言上下文
export const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: () => '',
});

// 语言上下文提供器组件
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 从本地存储中获取语言设置，如果没有则使用浏览器默认语言或德语
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    return (savedLanguage && (savedLanguage === 'zh' || savedLanguage === 'de')) 
      ? savedLanguage 
      : defaultLanguage;
  });

  // 翻译函数
  const t = (key: string, section?: string): string => {
    try {
      // 使用类型断言确保类型安全
      let result: any = translations[language];
      
      if (key.includes('.')) {
        // 处理带点的嵌套键，如"openingCategories.开放性开局"
        const parts = key.split('.');
        if (parts.length === 2) {
          const [section, itemKey] = parts;
          if (result[section] && result[section][itemKey] !== undefined) {
            return result[section][itemKey];
          }
        }
      } else if (section && result[section] && result[section][key] !== undefined) {
        // 处理带section参数的情况
        return result[section][key];
      } else if (result[key] !== undefined) {
        // 处理直接键的情况
        return result[key];
      }
      
      // 如果找不到翻译，返回原键
      return key.split('.').pop() || key;
    } catch (error) {
      console.error(`Translation error: key=${key}, language=${language}`, error);
      return key;
    }
  };

  // 当语言变化时，更新网页标题和存储语言设置
  useEffect(() => {
    document.title = t('pageTitle');
    localStorage.setItem('language', language);
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'de-DE';
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 自定义钩子，用于在组件中获取语言上下文
export const useLanguage = () => useContext(LanguageContext);

export default LanguageProvider; 