import { getContentsList } from "@/app/_libs/microcms";
import ContentsList from "@/app/_components/ContentsList";
import { CONTENTS_LIST_LIMIT } from "@/app/_constants";
import Pagination from "@/app/_components/Pagination";
import SearchField from "@/app/_components/SearchField";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "コンテンツ",
  description: "コンテンツ一覧です。",
};

export default async function Page() {
  const { contents, totalCount } = await getContentsList({
    limit: CONTENTS_LIST_LIMIT,
  });

  return (
    <>
      <SearchField />
      <ContentsList contents={contents} />
      <Pagination totalCount={totalCount} />
    </>
  );
}
