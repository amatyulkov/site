import { Post } from '@site/types';
import Link from 'next/link';
import { getPosts } from '@/content-server';
import { GetStaticProps, NextPage } from 'next';
import typography from '@/components/typography/typography.module.css';
import index from './index.module.css';
import { FormattedDate } from '@/components/formatted-date';

type HomePageProps = {
  recentPosts: Post[];
};

const HomePage: NextPage<HomePageProps> = props => (
  <>
    <main
      className={[
        typography.typographyRoot,
        typography.typographyContainer,
      ].join(' ')}
    >
      <h1>Recent Posts</h1>
      <ul className={index.recentPostsList}>
        {props.recentPosts.map(post => (
          <li key={post.id} className={index.recentPostsListItem}>
            <h2>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </h2>
            <p>
              <FormattedDate date={post.meta.publishedAt} />
              {' / '}
              {post.meta.tags?.join(', ')}
            </p>
            <p>{post.meta.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  </>
);

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const recentPosts = await getPosts();
  return {
    props: { recentPosts },
  };
};

export default HomePage;
