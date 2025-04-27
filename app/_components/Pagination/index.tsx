import Link from "next/link";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import styles from "./index.module.css";
type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
};

export default function Pagination({
  current = 1,
  totalCount,
  basePath = "/news",
}: Props) {
  const pages = Array.from(
    { length: Math.ceil(totalCount / NEWS_LIST_LIMIT) },
    (_, index) => index + 1
  );

  return (
    <nav>
      <ul className={styles.container}>
        {pages.map((page) => (
          <li className={styles.list} key={page}>
            {current === page ? (
              <span className={`${styles.item} ${styles.current}`}>{page}</span>
            ) : (
              <Link href={`${basePath}/p/${page}`} className={styles.item}>
                {page}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
