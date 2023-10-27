import Image from 'next/image'
import styles from './page.module.css'



export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          ハロー！このページは&nbsp;
          <code className={styles.code}>app/page.tsx</code>
          &nbsp;だよ！
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <p>Vercelのロゴがあった場所！</p>
              
            
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <p>Next.jsロゴがあった場所！なんか薄い！</p>
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            下のボタン１！ <span>-&gt;</span>
          </h2>
          <p>aで囲うことで、h2と、このpに共通のスタイルとハイパーリンクを適用してる！さらに、この下のボタン１のボタンの文字数を増やして、カードが大きくなればなるほど右の３つのカードも大きくなる！なんで！？</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
