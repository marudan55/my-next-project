import { getContentList, getCategoryDetail } from "@/app/_libs/microcms";
import ContentList from "@/app/_components/ContentList";
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

  const { contents, totalCount } = await getContentList({
    limit: CONTENTS_LIST_LIMIT,
    filters: `category[equals]${category.id}`,
  });

  return (
    <>
      <p>
        <Category category={category} />
        のコンテンツ一覧
      </p>
      <ContentList contents={contents} />
      <Pagination
        totalCount={totalCount}
        basePath={`/contents/category/${category.id}`}
      />
    </>
  );
}
