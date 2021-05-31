import * as React from 'react';

import { text, withKnobs } from '@storybook/addon-knobs';
import { Box } from '../layout/box';

export default {
  title: 'Typography / Copy',
  decorators: [withKnobs],
};

export const Copy = () => (
  <Box>
    <p className={'excerpt'}>
      Brooklyn Nine-Nine is an American police procedural comedy television
      series created by Dan Goor and Michael Schur. The series revolves around
      Jake Peralta (Andy Samberg), an immature but talented NYPD detective in
      Brooklyn's fictional 99th Precinct, who often comes into conflict with his
      new commanding officer, the serious and stern Captain Raymond Holt (Andre
      Braugher).
    </p>
    <p>
      {text(
        'Primary text',
        `
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          labore sunt deleniti facilis iusto alias nesciunt dolorum maxime
          consectetur, hic ipsam earum at eveniet quisquam laboriosam quos et
          ratione ex?
        `,
      )}
    </p>
    <blockquote>
      <p>
        {text(
          'Quote',
          `
            I believe that through discipline, though not through discipline
            alone, we can achieve serenity, and a certain small but precious
            measure of the freedom from the accidents of incarnation, and charity,
            and that detachment which preserves the world which it renounces.
          `,
        )}
      </p>
      <p>
        I believe that through discipline we can learn to preserve what is
        essential to our happiness in more and more adverse circumstances, and
        to abandon with simplicity what would else have seemed to us
        indispensable; that we come a little to see the world without the gross
        distortion of personal desire, and in seeing it so, accept more easily
        our earthly privation and its earthly horror — But because I believe
        that the reward of discipline is greater than its immediate objective, I
        would not have you think that discipline without objective is possible:
        in its nature discipline involves the subjection of the soul to some
        perhaps minor end; and that end must be real, if the discipline is not
        to be factitious.
      </p>
      <footer>
        Robert J. Oppenheimer from{' '}
        <cite title='Robert Oppenheimer : Letters and Recollections (1995)'>
          Robert Oppenheimer : Letters and Recollections (1995)
        </cite>
      </footer>
    </blockquote>
    <p>
      Julius Robert Oppenheimer[note 1] (/ˈɒpənˌhaɪmər/; April 22, 1904 –
      February 18, 1967) was an American theoretical physicist and professor of
      physics at the University of California, Berkeley. Oppenheimer was the
      wartime head of the Los Alamos Laboratory and is among those who are
      credited with being the "father of the atomic bomb" for their role in the
      Manhattan Project, the World War II undertaking that developed the first
      nuclear weapons. The first atomic bomb was successfully detonated on July
      16, 1945, in the Trinity test in New Mexico. Oppenheimer later remarked
      that it brought to mind words from the Bhagavad Gita: "Now I am become
      Death, the destroyer of worlds."[2][note 2] In August 1945, the weapons
      were used in the atomic bombings of Hiroshima and Nagasaki.
    </p>
  </Box>
);
