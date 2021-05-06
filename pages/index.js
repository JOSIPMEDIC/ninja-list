import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>Ninja Next | Home</title>
			</Head>
			<div>
				<h1 className={styles.title}>Homepage</h1>
				<p className={styles.text}>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry.
				</p>
				<p className={styles.text}>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry.
				</p>
				<Link href="/ninjas">
					<a className={styles.btn}>See Ninjas</a>
				</Link>
			</div>
		</>
	);
}
