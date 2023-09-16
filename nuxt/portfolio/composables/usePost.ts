import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

export const usePost = async () => {
  const { slug } = useRoute().params;

  const posts = await queryContent<ParsedContent>('blog').sort({ id: -1 }).find();

  const currentPost = computed(() => posts.find((post: ParsedContent) => post.slug === slug[0]));

  const similarPosts = computed(() =>
    posts.filter(
      (post: ParsedContent) =>
        post.category === currentPost.value?.category && post.slug !== currentPost.value?.slug
    )
  );

  return { posts, currentPost, similarPosts };
};
