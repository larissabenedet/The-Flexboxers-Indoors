import Head from "next/head";
import Link from "next/link";
import styles from "../styles/pages/Home.module.scss";
import { GetServerSideProps } from "next";
import { UserContext } from "../contexts/UserContext";
import { MissionContext } from "../contexts/MissionsContext";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Indoors</title>
            </Head>

            <main>
                <div className={styles.logo}>
                    <h1>
                        <img src="./img/house.png" alt="Fique em casa" />
                        Indoors
                    </h1>
                    <h2>Uma aventura em casa</h2>
                </div>
                <div className={styles.linksContainer}>
                    <div className={styles.left}>
                        <Link href="/dashboard" passHref>
                            <a className={styles.playButton}>
                                <svg
                                    version="1.1"
                                    width="200"
                                    height="200"
                                    viewBox="0 0 512 512"
                                >
                                    <g></g>
                                    <path d="M152.443 136.417l207.114 119.573-207.114 119.593z" />
                                </svg>
                            </a>
                        </Link>
                    </div>

                    <div className={styles.right}>
                        <Link href="/sobre" passHref>
                            <a className={styles.sobre}>Sobre</a>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
