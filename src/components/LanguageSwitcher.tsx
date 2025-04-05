import React from 'react';
import { Button, Menu, MenuItem, IconButton } from '@mui/material';
import { Language as LanguageIcon } from '@mui/icons-material';
import { useLanguage } from '../context/LanguageContext';
import { Language, supportedLanguages } from '../locales';

// 语言切换器组件
export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // 处理菜单打开
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // 处理菜单关闭
  const handleClose = () => {
    setAnchorEl(null);
  };

  // 处理语言选择
  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    handleClose();
  };

  return (
    <>
      <IconButton
        color="primary"
        aria-label={t('language')}
        aria-controls={open ? 'language-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          border: '1px solid',
          borderColor: 'primary.light',
          borderRadius: 1,
          padding: '4px 8px',
          backgroundColor: 'background.paper',
          '&:hover': {
            backgroundColor: 'primary.light',
            color: 'white',
          },
        }}
      >
        <LanguageIcon fontSize="small" sx={{ mr: 0.5 }} />
        {t(`languageOptions.${language}`)}
      </IconButton>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'language-button',
        }}
      >
        {supportedLanguages.map((lang) => (
          <MenuItem
            key={lang}
            onClick={() => handleLanguageSelect(lang)}
            selected={lang === language}
            sx={{
              fontWeight: lang === language ? 'bold' : 'normal',
            }}
          >
            {t(`languageOptions.${lang}`)}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageSwitcher; 