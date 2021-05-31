/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as React from 'react';
import { Baseline } from '../layout/baseline';
import { PostHeader } from '../post-header';
import typography from './typography.module.css';
export default {
  title: 'Typography / Post Header',
};

const publishedAt = '2020-11-03';
const tags = ['technical-debt', 'consulting', 'tools'];
const updatedAt = '2020-11-03';
const excerpt =
  'Technical debt is bad, sure, but how bad is it really, and how do you tell when it passes a point where the amount cripples the project and stunts development? Find out about tools and approaches to measuring technical debt in your projects.';
const meta = { publishedAt, tags, updatedAt, excerpt } as const;

const title = <h1>Assessing Technical Debt</h1>;
const postContents = (
  <p>
    The danger of technical debt is that at some point implementing a seemingly
    simple and straightforward features may not be feasible. That could happen
    because the confidence is low, the complexity is high, it doesn't fit the
    chosen &mdash; and the wrong &mdash; abstraction, or because it hinges on
    something you've tabled a long time ago and didn't bother to document.
    Anyway, bummer.
  </p>
);

const StoryBase: React.FC = ({ children }) => (
  <Baseline lineHeight={24} opacity={0.1}>
    <article
      className={[
        typography.typographyRoot,
        typography.typographyContainer,
      ].join(' ')}
    >
      {title}
      {children}
      <hr />
      {postContents}
    </article>
  </Baseline>
);

export const PostWithFullMeta = () => (
  <StoryBase>
    <PostHeader meta={meta} />
  </StoryBase>
);

PostWithFullMeta.storyName = 'Full Meta';

export const PostWithExcerptOnly = () => (
  <StoryBase>
    <PostHeader meta={{ excerpt, publishedAt }} />
  </StoryBase>
);

PostWithExcerptOnly.storyName = 'Excerpt Only';

export const PostWithTraitsOnly = () => (
  <StoryBase>
    <PostHeader meta={{ publishedAt, tags }} />
  </StoryBase>
);

PostWithTraitsOnly.storyName = 'Traits Only';

export const PostWithNoMeta = () => (
  <StoryBase>
    <PostHeader meta={{ publishedAt }} />
  </StoryBase>
);

PostWithNoMeta.storyName = 'No Meta';
