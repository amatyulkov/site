import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { getPostBySlug, getPostSlugs } from '@/content-server';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { FormattedDate } from '@/components/formatted-date';
import { serialize } from 'next-mdx-remote/serialize';
import { Box } from '@/components/layout/box';

type PostPageProps = {
  post: MDXRemoteSerializeResult;
};

const components = { FormattedDate, Box };
const PostPage: NextPage<PostPageProps> = (props: PostPageProps) => {
  return <MDXRemote components={components} {...props.post} />;
};

type PostPageParams = {
  id: string;
};

export const getStaticProps: GetStaticProps<PostPageProps, PostPageParams> =
  async ({ params }) => {
    const postSlug = getSafePostSlug(params);
    const post = await getPostBySlug(postSlug);

    return { props: { post: await serialize(post.body) } };
  };

export const getStaticPaths: GetStaticPaths<PostPageParams> = async () => ({
  fallback: false,
  paths: (await getPostSlugs()).map(slug => `/posts/${slug}`),
});

export default PostPage;

function getSafePostSlug(params: PostPageParams | undefined) {
  return params?.id ?? '';
}
