/* eslint-disable react/no-unescaped-entities */
import s from './page.module.sass'

export default function Home() {
  return (
    <main className={s.main}>
      <div>
      <h1 className={s.entry_text}>Welcome to MovieHUB</h1>
      <p>
        With MovieHub, you can effortlessly<br/>
        keep track of all the movies you've<br/>
        watched and create your personalized<br/>
        watchlist for future must-see films.
      </p>
      <p>
        Gone are the days of forgetting movie<br/>
        titles or wondering if you've seen a<br/>
        particular film before – our intuitive<br/>
        interface makes it easy to log and<br/>
        organize your cinematic journey.<br/>
      </p>
      </div>
    </main>
  )
}