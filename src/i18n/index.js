import { messages as footerMessages } from '@edx/frontend-component-footer';
import { messages as headerMessages } from '@edx/frontend-component-header';
import { messages as paragonMessages } from '@edx/paragon';

import arMessages from './messages/no_usadas_ssp/ar.json';
import frMessages from './messages/fr.json';
import es419Messages from './messages/no_usadas_ssp/es_419.json';
import zhcnMessages from './messages/zh_CN.json';
import ukMessages from './messages/no_usadas_ssp/uk.json';
import ruMessages from './messages/ru.json';
import hiMessages from './messages/no_usadas_ssp/hi.json';
import faIRMessages from './messages/no_usadas_ssp/fa_IR.json';
import frCAMessages from './messages/no_usadas_ssp/fr_CA.json';
import dedeCAMessages from './messages/de_DE.json';
import ititCAMessages from './messages/it_IT.json';
import ptptCAMessages from './messages/pt_PT.json';
// no need to import en messages-- they are in the defaultMessage field
import esesMessages from './messages/es-es.json';
import thMessages from './messages/th.json';
import plMessages from './messages/pl.json';
import koKRMessages from './messages/ko_KR.json';
import nbMessages from './messages/nb.json';
import nlNLMessages from './messages/nl_NL.json';

const appMessages = {
  ar: arMessages,
  'es-419': es419Messages,
  fr: frMessages,
  'zh-cn': zhcnMessages,
  'fa-ir': faIRMessages,
  'fr-ca': frCAMessages,
  ru: ruMessages,
  uk: ukMessages,
  'de-de': dedeCAMessages,
  'it-it': ititCAMessages,
  'pt-pt': ptptCAMessages,
  'es-es': esesMessages,
  'th': thMessages,
  pl: plMessages,
  'ko-kr': koKRMessages,
  'nb': nbMessages,
  'nl-nl': nlNLMessages,
};

export default [
  paragonMessages,
  appMessages,
  footerMessages,
  headerMessages,
];
