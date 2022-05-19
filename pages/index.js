import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Famous Doctrine</title>
        <meta name="description" content="Famous Doctrine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.logoWrapper}>
          <Image 
            src="/logo-official.png"
            alt="Famous Logo"
            height="200"
            width="200"
          />
        </div>

        <h1 className={styles.title}>
          Famous Doctrine
        </h1>

        <p className={styles.description}>
	  {"Bringing you what's hot in crypto!"}
        </p>

        <a href="#">
          <button className={styles.btn}>
            Twitter Feed
          </button>
        </a>

        <a href="mailto:info@famousdoctrine.fm">
          <div className={styles.contact}>
            <span>Contact Me</span>
            <Image 
              src="/mail.svg"
              alt="contact me"
              height="20"
              width="20"
            />
          </div>
        </a>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerTitle}>Contact</p>
          <span className={styles.footerInfo}><a href="tel:+1-401-373-0001">tel:+1-401-373-0001</a></span>
          <br />
          <br />
          <span className={styles.footerInfo}><a href="fax:+1-401-223-2642">fax:+1-401-223-2642</a></span>
          <br />
          <br />
          <span className={styles.footerInfo}>info@famousdoctrine.fm</span>
          <br />
          <br />
          <span className={styles.footerInfo}>
            1007 Ten Rod Rd <br />
            #1004 <br />
            North Kingstown, RI 02852
          </span>
          <br />
          <br />
          <br />
          <span>Copyright &copy; 2022. Famous Doctrine LLC</span>
        </div>
      </footer>
    </div>
  )
}
