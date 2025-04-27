import NewsList from "@/app/_components/NewsList";
import { getNewsList, getCategoryDetail } from "@/app/_libs/microcms";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import { notFound } from "next/navigation";
import Pagination from "@/app/_components/Pagination";

type Props = {
  params: {
    id: string;
    current: string;
  };
};

export default async function Page({ params }: Props) {
  const current = parseInt(params.current, 10);
  const category = await getCategoryDetail(params.id).catch(notFound);
  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    offset: (current - 1) * NEWS_LIST_LIMIT,
    filters: `category[equals]${category.id}`,
  });

  if (news.length === 0) {
    notFound();
  }

  return (
    <>
      <NewsList news={news} />
      <Pagination
        totalCount={totalCount}
        current={current}
        basePath={`/news/category/${category.id}`}
      />
    </>
  );
}
