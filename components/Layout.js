import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import Link from "next/link";

const name = "TestMan";
export const siteTitle = "Next.js blog";

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              src='/images/profile.png'
              alt='test'
              className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}
              width={70}
              height={70}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Image
              src='/images/profile.png'
              alt='test'
              className={`${utilStyles.borderCircle}`}
              width={40}
              height={40}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href='/'>←ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
