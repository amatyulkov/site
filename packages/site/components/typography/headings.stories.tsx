import * as React from 'react';

import { text, withKnobs } from '@storybook/addon-knobs';
export default {
  title: 'Typography',
  decorators: [withKnobs],
};

export const Headings = () => (
  <>
    <p className={'title'}>{text('Title', 'Title')}</p>
    <h1>{text('H1', 'Heading Level One')}</h1>
    <h2>{text('H2', 'Heading Level Two')}</h2>
    <h3>{text('H3', 'Heading Level Three')}</h3>
    <h4>{text('H4', 'Heading Level Four')}</h4>
    <h5>{text('H5', 'Heading Level Five')}</h5>
    <h6>{text('H6', 'Heading Level Six')}</h6>
  </>
);
