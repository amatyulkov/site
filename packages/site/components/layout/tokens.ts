import tokens from './tokens.module.css';

const paddingClassNames: { [x in PaddingToken]: string } = {
  xs: tokens.paddingXs,
  s: tokens.paddingS,
  m: tokens.paddingM,
  l: tokens.paddingL,
  xl: tokens.paddingXl,
  xxl: tokens.paddingXxl,
};

export type PaddingToken = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

export const usePadding = (token: PaddingToken) => paddingClassNames[token];
