import s from './style.module.sass';
import Image from 'next/image';
import { ShortDescription } from '@/components/ShortDescription';

type Props = {
  params: {
    id: string;
  };
};

// TODO: finish movie page layout
export default function Movie({ params }: Props) {
  return (
    <main>
      <div className={s.movieBlock}>
        <div className={s.movieRating}>
          <p className={s.rating}>7.8</p>
          <p className={s.marksCount}>1291 marks</p>
        </div>
        <div className={s.movieInfo}>
          <div className={s.hero}>
            <Image
              className={s.coverImage}
              src={'https://picsum.photos/200/300'}
              alt={'Movie cover image'}
              width={200}
              height={300}
            />
            <button className={s.watchTrailerBtn}>WATCH TRAILER</button>
          </div>
          <div className={s.movieDetails}>
            <div>
              <h1>Клан Сопрано</h1>
              <div className={s.originalTitle}>The Sopranos</div>
              <button className={s.willWatchBtn}>WILL WATCH</button>
            </div>
            <ShortDescription />
            <div className={s.about}>
              <h2>About</h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
