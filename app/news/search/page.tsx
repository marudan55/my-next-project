import { getContentsList } from "@/app/_libs/microcms";
import ContentsList from "@/app/_components/ContentsList";
import { CONTENTS_LIST_LIMIT } from "@/app/_constants";
import Pagination from "@/app/_components/Pagination";
import SearchField from "@/app/_components/SearchField";

type Props = {
  searchParams: {
    q?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  const { contents } = await getContentsList({
    limit: CONTENTS_LIST_LIMIT,
    q: searchParams.q,
  });

  return (
    <>
      <SearchField />
      <ContentsList contents={contents} />
    </>
  );
}
