import React, { createContext, useState, useEffect, useContext } from 'react';
import { translations, Language, defaultLanguage } from '../locales';

// 定义语言上下文类型
interface LanguageContextType {
  language: Language;
  t: (key: string, section?: string) => string;
}

// 创建语言上下文
export const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  t: () => '',
});

// 语言上下文提供器组件
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 始终使用中文
  const language: Language = 'zh';

  // 翻译函数
  const t = (key: string, section?: string): string => {
    try {
      const keys = key.split('.');
      // 使用类型断言确保类型安全
      let result: any = translations[language];
      
      // 如果指定了section，先进入该section
      if (section) {
        result = result[section];
        if (!result) return key;
      }
      
      // 按照点分隔符访问嵌套属性
      for (const k of keys) {
        result = result[k];
        if (result === undefined) return key;
      }
      
      // 确保结果是字符串
      return typeof result === 'string' ? result : key;
    } catch (error) {
      console.error(`Translation error: key=${key}, language=${language}`, error);
      return key;
    }
  };

  // 当组件挂载时，更新网页标题
  useEffect(() => {
    document.title = t('pageTitle');
  }, []);

  return (
    <LanguageContext.Provider value={{ language, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 自定义钩子，用于在组件中获取语言上下文
export const useLanguage = () => useContext(LanguageContext);

export default LanguageProvider; 