import { getContentList } from "@/app/_libs/microcms";
import ContentList from "@/app/_components/ContentList";
import { CONTENTS_LIST_LIMIT } from "@/app/_constants";
import Pagination from "@/app/_components/Pagination";
import SearchField from "@/app/_components/SearchField";

type Props = {
  searchParams: {
    q?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  const { contents } = await getContentList({
    limit: CONTENTS_LIST_LIMIT,
    q: searchParams.q,
  });

  return (
    <>
      <SearchField />
      <ContentList contents={contents} />
    </>
  );
}
