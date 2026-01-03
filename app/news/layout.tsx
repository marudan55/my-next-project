import Hero from "@/app/_components/Hero";
import Sheet from "@/app/_components/Sheet";

export const revalidate = 60;

type Props = {
  children: React.ReactNode;
};

export default function ContentsLayout({ children }: Props) {
  return (
    <>
      <Hero title="Contents" sub="コンテンツ" />
      <Sheet>{children}</Sheet>
    </>
  );
}
