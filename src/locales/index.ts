import zhTranslations from './zh';

// 定义语言类型
export type Language = 'zh';

// 所有翻译的集合
export const translations = {
  zh: zhTranslations
};

// 获取浏览器默认语言
export const getBrowserLanguage = (): Language => {
  return 'zh'; // 只使用中文
};

// 默认语言
export const defaultLanguage: Language = 'zh';

// 支持的语言列表
export const supportedLanguages: Language[] = ['zh'];

export default translations; 