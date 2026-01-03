import Link from "next/link";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link href="/contents">コンテンツ一覧</Link>
          </li>
          <li className={styles.item}>
            <Link href="/contents/category/movies">映画</Link>
          </li>
          <li className={styles.item}>
            <Link href="/contents/category/novels">小説</Link>
          </li>
          <li className={styles.item}>
            <Link href="/contents/category/comics">漫画</Link>
          </li>
        </ul>
      </nav>
      <p className={styles.cr}>© SIMPLE. All Rights Reserved 2024</p>
    </footer>
  );
}
