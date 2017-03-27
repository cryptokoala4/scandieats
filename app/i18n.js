/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';
import enUsLocaleData from 'react-intl/locale-data/en';
import zhLocaleData from 'react-intl/locale-data/zh';
import zhHkLocaleData from 'react-intl/locale-data/de';

import { DEFAULT_LOCALE } from '../app/containers/App/constants';

import enUsTranslationMessages from './translations/en_us.json';
import zhCnTranslationMessages from './translations/zh_cn.json';
import zhHkTranslationMessages from './translations/zh_hk.json';


addLocaleData(enUsLocaleData);
addLocaleData(zhLocaleData);
addLocaleData(zhHkLocaleData);


export const appLocales = [
  'en',
  'zh',
  'de',
];

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE
    ? formatTranslationMessages(DEFAULT_LOCALE, enUsTranslationMessages)
    : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    const formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE
      ? defaultFormattedMessages[key]
      : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  }, {});
};

export const translationMessages = {
  en: formatTranslationMessages('en_us', enUsTranslationMessages),
  zh: formatTranslationMessages('zh_cn', zhCnTranslationMessages),
  de: formatTranslationMessages('zh_hk', zhHkTranslationMessages),
};
