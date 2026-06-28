import { getCollection, getEntry } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export type RelatedItem = {
  slug: string;
  title: string;
  excerpt: string;
  collection: 'narratives' | 'frameworks' | 'writing' | 'experiments';
  url: string;
};

async function safeGetEntry<T extends 'narratives' | 'frameworks' | 'writing' | 'experiments'>(
  collection: T,
  slug: string
): Promise<CollectionEntry<T> | null> {
  try {
    const entry = await getEntry(collection, slug);
    return entry ?? null;
  } catch {
    return null;
  }
}

export async function getRelatedContent(entry: {
  data: {
    relatedNarratives?: string[];
    relatedFrameworks?: string[];
    relatedArticles?: string[];
    relatedExperiments?: string[];
  };
}): Promise<{
  narratives: RelatedItem[];
  frameworks: RelatedItem[];
  writing: RelatedItem[];
  experiments: RelatedItem[];
}> {
  const { relatedNarratives = [], relatedFrameworks = [], relatedArticles = [], relatedExperiments = [] } = entry.data;

  const narrativeItems = (
    await Promise.all(relatedNarratives.map((slug) => safeGetEntry('narratives', slug)))
  )
    .filter(Boolean)
    .filter((e) => e!.data.status === 'published')
    .map((e) => ({
      slug: e!.slug,
      title: e!.data.title,
      excerpt: e!.data.excerpt,
      collection: 'narratives' as const,
      url: `/narratives/${e!.slug}`,
    }));

  const frameworkItems = (
    await Promise.all(relatedFrameworks.map((slug) => safeGetEntry('frameworks', slug)))
  )
    .filter(Boolean)
    .filter((e) => e!.data.status === 'published')
    .map((e) => ({
      slug: e!.slug,
      title: e!.data.title,
      excerpt: e!.data.excerpt,
      collection: 'frameworks' as const,
      url: `/frameworks/${e!.slug}`,
    }));

  const writingItems = (
    await Promise.all(relatedArticles.map((slug) => safeGetEntry('writing', slug)))
  )
    .filter(Boolean)
    .filter((e) => e!.data.status === 'published')
    .map((e) => ({
      slug: e!.slug,
      title: e!.data.title,
      excerpt: e!.data.excerpt,
      collection: 'writing' as const,
      url: `/writing/${e!.slug}`,
    }));

  const experimentItems = (
    await Promise.all(relatedExperiments.map((slug) => safeGetEntry('experiments', slug)))
  )
    .filter(Boolean)
    .filter((e) => e!.data.status !== 'draft')
    .map((e) => ({
      slug: e!.slug,
      title: e!.data.title,
      excerpt: e!.data.excerpt,
      collection: 'experiments' as const,
      url: `/experiments/${e!.slug}`,
    }));

  return {
    narratives: narrativeItems,
    frameworks: frameworkItems,
    writing: writingItems,
    experiments: experimentItems,
  };
}

export async function getFeaturedNarrative() {
  const all = await getCollection('narratives', ({ data }) => data.status === 'published' && data.featuredOnHome);
  return all[0] ?? null;
}

export async function getPublished<T extends 'narratives' | 'frameworks' | 'writing' | 'experiments'>(
  collection: T
) {
  return getCollection(collection, ({ data }) =>
    data.status === 'published' || data.status === 'active' || data.status === 'complete'
  );
}
