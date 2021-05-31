import { Post } from '@site/types';

type SanityResponse<T> = {
  data: T;
};

type PostPreview = {
  title: string;
  body: string;
  id: string;
  publishedAt: string;
  slug: {
    current: string;
  };
};

type Slug = {
  current: string;
};

type PostSlugResponseSchema = {
  allPage: Array<{ slug: Slug }>;
};

type PostsResponse = SanityResponse<{
  allPage: PostPreview[];
}>;

export const getPosts = async () => {
  return (
    await getSanityContent<PostsResponse>({
      query: `
      query AllPages {
        allPage {
          title
          slug { current }
          body: content
          id: _id
          publishedAt: _createdAt
        }
      }

    `,
    })
  ).data.allPage.map(makePost);
};

const makePost = ({
  id,
  body,
  title,
  publishedAt,
  slug,
}: PostPreview): Post => ({
  body,
  id,
  title,
  meta: { publishedAt, excerpt: body },
  slug: slug.current,
});

export const getPostSlugs = async () => {
  const slugs = await getSanityContent<SanityResponse<PostSlugResponseSchema>>({
    query: `
      query AllPages {
        allPage {
          slug { current }
        }
      }
    `,
  });
  return slugs.data.allPage.map(x => x.slug.current);
};

export const getPostBySlug = async (slug: string) => {
  return makePost(
    (
      await getSanityContent<PostsResponse>({
        query: `
      query PageBySlug($slug: String!) {
        allPage(where: { slug: { current: { eq: $slug } } }) {
          title
          slug { current }
          body: content
          id: _id
          publishedAt: _createdAt
        }
      }
    `,
        variables: {
          slug,
        },
      })
    ).data.allPage[0],
  );
};

export const getSanityContent = async <ReturnType, VariablesType = unknown>({
  query,
  variables,
}: {
  query: string;
  variables?: VariablesType;
}) =>
  // TODO: use .env
  await fetch('https://gphonb34.api.sanity.io/v1/graphql/production/default', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  }).then(async response => (await response.json()) as ReturnType);
