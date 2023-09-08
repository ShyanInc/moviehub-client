import s from './style.module.sass';
import Image from 'next/image';

type Props = {
  params: {
    id: string;
  };
};

// TODO: create movie page layout
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
            <div className={s.shortDescription}>
              <h2>Short Description</h2>
              <div className={s.shortDescriptionContent}>
                <p>
                  Невеста» — таинственная женщина, которая входила в элитный
                  отряд убийц и считалась экспертом во владении мечом. Однажды
                  она решила изменить свой образ жизни, покончив с карьерой
                  наемного убийцы, чтобы выйти замуж за любимого мужчину и
                  осесть в спокойном месте.
                </p>
              </div>
            </div>
            <div className={s.about}>
              <h2>About</h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
