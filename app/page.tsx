import styles from "./page.module.css";
import Image from "next/image";
import { getContentList } from "@/app/_libs/microcms";
import ContentList from "@/app/_components/ContentList";
import ButtonLink from "@/app/_components/ButtonLink";
import { TOP_CONTENTS_LIST_LIMIT } from "@/app/_constants";

export const revalidate = 60;

export default async function Home() {
  const data = await getContentList({
    limit: TOP_CONTENTS_LIST_LIMIT,
  });
  const isHaveContents = data.contents.length > 0;

  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>おうちで涙活.com</h1>
          <p className={styles.description}>
            自宅で涙活を楽しめるよう、「泣ける」コンテンツを紹介しています。
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
          priority
          sizes="100vw"
        />
      </section>
      <section className={styles.contents}>
        <h2 className={styles.contentsTitle}>最新コンテンツ</h2>
        <ContentList contents={data.contents} />

        {isHaveContents && (
          <div className={styles.contentsLink}>
            <ButtonLink href="/contents">もっとみる</ButtonLink>
          </div>
        )}
      </section>
    </>
  );
}
