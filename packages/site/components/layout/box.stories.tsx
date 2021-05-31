import { Box as BoxComponent } from './box';
import * as React from 'react';

export default {
  title: 'Layout',
};

const styles = (
  <style>
    {`

.box + .box {
  margin-top: var(--margin-xl);
}

.box {
  background-color: #e91e63;
}

.contents {
  background-color: white;
}

`}
  </style>
);

export const Box = () => {
  const contents = <p className={'contents'}>content</p>;
  return (
    <>
      {styles}
      <BoxComponent className={'box'}>{contents}</BoxComponent>
      <BoxComponent className={'box'} padding={'xs'}>
        {contents}
      </BoxComponent>
      <BoxComponent className={'box'} padding={'s'}>
        {contents}
      </BoxComponent>
      <BoxComponent className={'box'} padding={'m'}>
        {contents}
      </BoxComponent>
      <BoxComponent className={'box'} padding={'l'}>
        {contents}
      </BoxComponent>
      <BoxComponent className={'box'} padding={'xl'}>
        {contents}
      </BoxComponent>
      <BoxComponent className={'box'} padding={'xxl'}>
        {contents}
      </BoxComponent>
    </>
  );
};
