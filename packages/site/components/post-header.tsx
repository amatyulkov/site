import { PostMeta } from '@site/types';
import * as React from 'react';
import { FormattedDate } from './formatted-date';
import postHeader from './post-header.module.css';

type PostMetaTraitProps = {
  title: string;
  contents: React.ReactElement | React.ReactElement[];
};

type PostHeaderProps = {
  meta: PostMeta;
};

export const PostHeader: React.FC<PostHeaderProps> = props => {
  const { updatedAt, tags, publishedAt, excerpt } = props.meta;

  const traits: Array<{
    key: string;
    content: React.ReactElement | React.ReactElement[];
    title: string;
  }> = [];

  if (updatedAt !== undefined) {
    traits.push({
      key: 'updated-at',
      content: <FormattedDate date={updatedAt} />,
      title: 'Updated At',
    });
  }

  if (publishedAt !== undefined) {
    traits.push({
      key: 'published-at',
      content: <FormattedDate date={publishedAt} />,
      title: 'Published At',
    });
  }

  if (tags !== undefined && tags.length > 0) {
    traits.push({
      key: 'tags',
      content: tags.map((tag, index) => (
        <React.Fragment key={tag}>
          <span key={tag}>{tag}</span>
          {index < tags.length - 1 && ', '}
        </React.Fragment>
      )),
      title: 'Tags',
    });
  }

  return (
    <>
      {traits.length > 0 && (
        <ul className={postHeader.list}>
          {traits.map(({ title, content, key }) => (
            <li key={key}>
              <PostMetaTrait contents={content} title={title} />
            </li>
          ))}
        </ul>
      )}

      {excerpt !== undefined && <p className={'excerpt'}>{excerpt}</p>}
    </>
  );
};

const PostMetaTrait: React.FC<PostMetaTraitProps> = props => (
  <span>
    <em className={postHeader.traitName}>{props.title}:</em>&nbsp;
    <span>{props.contents}</span>
  </span>
);
