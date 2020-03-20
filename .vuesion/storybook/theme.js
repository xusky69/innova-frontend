import { create } from '@storybook/theming';
import theme from './_theme.scss';

export default create({
  ...theme,
  brandTitle: 'vuesion Storybook',
  brandUrl: 'https://vuesion.herokuapp.com',
  brandImage: 'https://vuesion.herokuapp.com/logo.png',
});
