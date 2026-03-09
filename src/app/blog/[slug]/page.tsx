import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticleTemplate from "@/components/BlogArticleTemplate";
import { blogArticles } from "@/data/blog-content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(blogArticles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles[slug];
  if (!article) return {};
  return {
    title: `${article.title} | VanEck Direct`,
    description: article.description,
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = blogArticles[slug];
  if (!article) notFound();

  return (
    <BlogArticleTemplate
      title={article.title}
      subtitle={article.subtitle}
      footnotes={article.footnotes}
      relatedArticles={article.relatedArticles}
    >
      {article.content}
    </BlogArticleTemplate>
  );
}
