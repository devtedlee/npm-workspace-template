import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',
  brandTitle: 'Learning Home',
  brandUrl: 'https://hybridlearning.hunet.co.kr',
  brandTarget: '_target',

  appBg: '#f7f8fa',
  fontBase: "'Pretendard', sans-serif",
  textColor: '#09090a',
  barSelectedColor: '#6436e2',
});

addons.setConfig({
  theme,
});
