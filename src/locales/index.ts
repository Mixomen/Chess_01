import zhTranslations from './zh';
import deTranslations from './de';

// 定义语言类型
export type Language = 'zh' | 'de';

// 所有翻译的集合
export const translations = {
  zh: zhTranslations,
  de: deTranslations
};

// 获取浏览器默认语言
export const getBrowserLanguage = (): Language => {
  const browserLang = navigator.language.split('-')[0];
  return browserLang === 'zh' ? 'zh' : 'de'; // 如果不是中文，则使用德语
};

// 默认语言
export const defaultLanguage: Language = 'de';

// 支持的语言列表
export const supportedLanguages: Language[] = ['de', 'zh'];

export default translations; 