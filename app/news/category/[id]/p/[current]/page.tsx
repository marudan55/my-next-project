import ContentsList from "@/app/_components/ContentsList";
import { getContentsList, getCategoryDetail } from "@/app/_libs/microcms";
import { CONTENTS_LIST_LIMIT } from "@/app/_constants";
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

  const { contents, totalCount } = await getContentsList({
    limit: CONTENTS_LIST_LIMIT,
    offset: (current - 1) * CONTENTS_LIST_LIMIT,
    filters: `category[equals]${category.id}`,
  });

  if (contents.length === 0) {
    notFound();
  }

  return (
    <>
      <ContentsList contents={contents} />
      <Pagination
        totalCount={totalCount}
        current={current}
        basePath={`/contents/category/${category.id}`}
      />
    </>
  );
}
