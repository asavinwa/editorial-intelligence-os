import { defineCollection, z } from 'astro:content';

// Controlled tag vocabulary — single source of truth
export const TAGS = [
  'editorial-intelligence',
  'ai',
  'research',
  'customer-insight',
  'customer-stories',
  'operational-pressure',
  'hidden-hours',
  'narratives',
  'frameworks',
  'knowledge-systems',
  'editorial-systems',
  'content-strategy',
  'thought-leadership',
  'ai-workflows',
  'editorial-operations',
  'events',
  'business-change',
  'governance',
  'trust',
  'product-marketing',
  'evidence',
  'reuse',
  'editorial-os',
  'trusted-ai',
  'ai-governance',
  'case-studies',
  'workflow-friction',
  'winning-in-small',
  'small-business',
  'productivity',
  'cash-flow',
  'resilience',
  'digital-transformation',
  'workflows',
  'agent',
  'prototype',
  'mtd',
  'pricing',
  'tax',
  'accounting',
  'ai-maturity',
  'capacity-gap',
  'workflow-integration',
  'commercial-transformation',
  'bookkeeping',
  'self-assessment',
  'client-behaviour',
  'operational-reset',
  'continuous-compliance',
  'workbook',
  'guided-experience',
  'ai-adoption',
  'workflow-design',
  'customer-proof',
  'behaviour-change',
  'product-marketing',
  'launch-narrative',
  'sales-enablement',
  'positioning',
  'activation',
] as const;

export type Tag = typeof TAGS[number];

const tagSchema = z.enum(TAGS);

// Narratives — long-form, argument-led pieces
const narratives = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    excerpt: z.string(),
    date: z.date(),
    status: z.enum(['draft', 'published']),
    tags: z.array(tagSchema),
    theme: z.string().optional(),
    readTime: z.number(),
    featuredOnHome: z.boolean().default(false),
    relatedFrameworks: z.array(z.string()).default([]),
    relatedArticles: z.array(z.string()).default([]),
    relatedNarratives: z.array(z.string()).default([]),
    relatedExperiments: z.array(z.string()).default([]),
  }),
});

// Frameworks — reusable mental models and methodologies
const frameworks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    excerpt: z.string(),
    date: z.date(),
    status: z.enum(['draft', 'published']),
    tags: z.array(tagSchema),
    type: z.enum(['model', 'process', 'matrix', 'template', 'cycle']),
    downloadable: z.boolean().default(false),
    downloadUrl: z.string().optional(),
    relatedNarratives: z.array(z.string()).default([]),
    relatedArticles: z.array(z.string()).default([]),
    relatedFrameworks: z.array(z.string()).default([]),
    relatedExperiments: z.array(z.string()).default([]),
  }),
});

// Writing — articles, notes, reflections
const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.date(),
    status: z.enum(['draft', 'published']),
    tags: z.array(tagSchema),
    readTime: z.number(),
    type: z.enum(['article', 'note', 'reflection']),
    relatedNarratives: z.array(z.string()).default([]),
    relatedFrameworks: z.array(z.string()).default([]),
    relatedArticles: z.array(z.string()).default([]),
  }),
});

// Experiments — implementations of the Editorial Intelligence OS
const experiments = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    excerpt: z.string(),
    date: z.date(),
    status: z.enum(['active', 'complete', 'archived', 'draft']),
    tags: z.array(tagSchema),
    type: z.enum(['prompt-library', 'diagnostic', 'workflow', 'tool', 'agent', 'os', 'workbook']),
    githubUrl: z.string().optional(),
    liveUrl: z.string().optional(),
    relatedFrameworks: z.array(z.string()).default([]),
    relatedNarratives: z.array(z.string()).default([]),
    relatedExperiments: z.array(z.string()).default([]),
  }),
});

export const collections = { narratives, frameworks, writing, experiments };
