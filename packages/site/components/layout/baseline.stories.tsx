import { Baseline } from './baseline';
import typography from '../typography/typography.module.css';
import * as React from 'react';
import { number, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Baseline',
  decorators: [withKnobs],
};

export const BasileneBasicUsage = () => (
  <Baseline
    lineHeight={number('Line Height', 24)}
    offset={number('Offset', 0)}
    opacity={number('Opacity', 1, { range: true, min: 0, max: 1, step: 0.05 })}
  >
    <article className={typography.typographyContainer}>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolor
        praesentium possimus accusantium. Nisi, fugit ipsum maxime minus nostrum
        animi.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam,
        accusamus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eaque
        distinctio molestias delectus molestiae suscipit! Consequuntur, et.
        Officiis, ullam ut? Architecto, possimus. Cupiditate quibusdam sapiente
        dolore nesciunt, provident aliquam corrupti.
      </p>
    </article>
  </Baseline>
);
