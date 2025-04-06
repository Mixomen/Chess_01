import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { supportedLanguages, Language } from '../../locales';
import './styles.css';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  
  // 切换语言的处理函数
  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="language-switcher">
      {supportedLanguages.map((lang) => (
        <button
          key={lang}
          className={`language-btn ${language === lang ? 'active' : ''}`}
          onClick={() => handleLanguageChange(lang)}
          aria-label={`切换到${lang === 'zh' ? '中文' : '德语'}`}
        >
          {lang === 'zh' ? '中文' : 'Deutsch'}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher; 