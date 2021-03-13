import Head from "next/head";
import Link from "next/link";
import styles from "../styles/pages/Home.module.scss";
import { GetServerSideProps } from 'next'
import { UserContext } from "../contexts/UserContext";
import { MissionContext } from "../contexts/MissionsContext";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Indoors</title>
            </Head>
            <h1>Indoors</h1>
            <main>
                <div className={styles.left}>
                    <Link href="/dashboard" passHref>
                        <a className={styles.playButton}>Começar</a>
                    </Link>
                </div>

                <div className={styles.right}>
                    <Link href="/sobre" passHref>
                        <a className={styles.sobre}>Sobre</a>
                    </Link>
                </div>
            </main>
        </div>
    );
}

