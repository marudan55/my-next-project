import { getContentList } from "@/app/_libs/microcms";
import ContentList from "@/app/_components/ContentList";
import { CONTENTS_LIST_LIMIT } from "@/app/_constants";
import Pagination from "@/app/_components/Pagination";
import SearchField from "@/app/_components/SearchField";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "コンテンツ",
  description: "コンテンツ一覧です。",
};

export default async function Page() {
  const { contents, totalCount } = await getContentList({
    limit: CONTENTS_LIST_LIMIT,
  });

  return (
    <>
      <SearchField />
      <ContentList contents={contents} />
      <Pagination totalCount={totalCount} />
    </>
  );
}
