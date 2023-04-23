import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import nextPackage from "package.json";

export default function Home({}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nico Neiman</title>
        <meta name="description" content="Nico Neiman's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Hello and welcome to Nico Neiman's Porfolio! 
        </h1>

        <p className={styles.description}>
We are working hard to bring you an exceptional experience, and while there may not be any content or pages available at this time, please know that they are coming soon.

Please bear with us as we continue to develop this site. 

In the meantime, please don't hesitate to contact us if you have any questions or would like to discuss potential collaboration opportunities. 

We appreciate your interest in our work and patience while this project gets ready.
        </p>
      </main>
    </div>
  );
}
