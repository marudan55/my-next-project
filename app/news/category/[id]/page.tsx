import { getContentsList, getCategoryDetail } from "@/app/_libs/microcms";
import ContentsList from "@/app/_components/ContentsList";
import { notFound } from "next/navigation";
import Category from "@/app/_components/Category";
import { CONTENTS_LIST_LIMIT } from "@/app/_constants";
import Pagination from "@/app/_components/Pagination";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const category = await getCategoryDetail(params.id).catch(notFound);

  const { contents, totalCount } = await getContentsList({
    limit: CONTENTS_LIST_LIMIT,
    filters: `category[equals]${category.id}`,
  });

  return (
    <>
      <p>
        <Category category={category} />
        の記事一覧
      </p>
      <ContentsList contents={contents} />
      <Pagination
        totalCount={totalCount}
        basePath={`/contents/category/${category.id}`}
      />
    </>
  );
}
