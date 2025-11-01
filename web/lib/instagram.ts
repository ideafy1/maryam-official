import { instagramApi, siteConfig } from "@/constants/content";

type InstagramApiMedia = {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
  media_type: "IMAGE" | "CAROUSEL_ALBUM" | "VIDEO";
  thumbnail_url?: string;
  timestamp?: string;
};

export type InstagramPost = {
  id: string;
  imageUrl: string;
  link: string;
  caption?: string;
};

export type InstagramContent =
  | { mode: "api"; posts: InstagramPost[] }
  | { mode: "embed"; posts: InstagramPost[]; error?: string };

export async function getInstagramContent(): Promise<InstagramContent> {
  if (siteConfig.instagramMode !== "api") {
    return { mode: "embed", posts: [] };
  }

  if (!instagramApi.token || !instagramApi.userId) {
    return {
      mode: "embed",
      posts: [],
      error: "Instagram API credentials are not configured.",
    };
  }

  const endpoint = `https://graph.instagram.com/${instagramApi.userId}/media?fields=id,media_url,permalink,caption,media_type,thumbnail_url,timestamp&limit=${instagramApi.postsCount}&access_token=${instagramApi.token}`;

  try {
    const response = await fetch(endpoint, {
      method: "GET",
      next: { revalidate: instagramApi.revalidate },
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Instagram API error: ${response.status} ${text}`);
    }

    const payload = (await response.json()) as { data?: InstagramApiMedia[] };
    const posts = (payload.data ?? [])
      .filter((media) => media.media_type !== "VIDEO")
      .slice(0, instagramApi.postsCount)
      .map((media) => ({
        id: media.id,
        imageUrl: media.media_url ?? media.thumbnail_url ?? "",
        link: media.permalink,
        caption: media.caption,
      }))
      .filter((post) => Boolean(post.imageUrl));

    if (!posts.length) {
      return {
        mode: "embed",
        posts: [],
        error: "No media available from Instagram API.",
      };
    }

    return { mode: "api", posts };
  } catch (error) {
    console.error(error);
    return {
      mode: "embed",
      posts: [],
      error: error instanceof Error ? error.message : "Unable to load Instagram feed.",
    };
  }
}
