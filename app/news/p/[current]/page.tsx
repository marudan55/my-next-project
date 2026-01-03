import ContentsList from "@/app/_components/ContentsList";
import { getContentsList } from "@/app/_libs/microcms";
import { CONTENTS_LIST_LIMIT } from "@/app/_constants";
import { notFound } from "next/navigation";
import Pagination from "@/app/_components/Pagination";
type Props = {
  params: {
    current: string;
  };
};

export default async function Page({ params }: Props) {
  const current = parseInt(params.current, 10);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const { contents, totalCount } = await getContentsList({
    limit: CONTENTS_LIST_LIMIT,
    offset: (current - 1) * CONTENTS_LIST_LIMIT,
  });

  if (contents.length === 0) {
    notFound();
  }

  return (
    <>
      <ContentsList contents={contents} />
      <Pagination totalCount={totalCount} current={current} />
    </>
  );
}
