import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";
import Category from "../Category";
import Date from "../Date";
import { Content } from "@/app/_libs/microcms";

type Props = {
  contents: Content[];
};

export default function ContentsList({ contents }: Props) {
  if (contents.length === 0) {
    return <p>コンテンツがありません。</p>;
  }
  return (
    <ul>
      {contents.map((article) => (
        <li key={article.id} className={styles.list}>
          <Link href={`/contents/${article.id}`} className={styles.link}>
            {article.thumbnail ? (
              <Image
                className={styles.image}
                src={article.thumbnail.url}
                alt=""
                width={article.thumbnail.width}
                height={article.thumbnail.height}
              />
            ) : (
              <Image
                className={styles.image}
                src="/no-image.png"
                alt="No Image"
                width={1200}
                height={630}
              />
            )}
            <dl className={styles.content}>
              <dt className={styles.title}>{article.title}</dt>
              <dd className={styles.meta}>
                <Category category={article.category} />
                <Date date={article.publishedAt ?? article.createdAt} />
              </dd>
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  );
}

