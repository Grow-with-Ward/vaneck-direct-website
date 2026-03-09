import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HelpArticleTemplate from "@/components/HelpArticleTemplate";
import { helpArticles } from "@/data/help-content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(helpArticles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = helpArticles[slug];
  if (!article) return {};
  return {
    title: `${article.title} | VanEck Direct`,
    description: article.description,
  };
}

export default async function HelpArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = helpArticles[slug];
  if (!article) notFound();

  return (
    <HelpArticleTemplate title={article.title}>
      {article.content}
    </HelpArticleTemplate>
  );
}
