// pages/tracking.js
import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import classNames from 'classnames';
import layout from '@/styles/Layout.module.scss';
import style from '@/styles/Tracking.module.scss';

const Tracking = () => {
  return (
    <div>
      <Head>
        <title>Package Tracking Feature</title>
        <meta name="description" content="Learn about our advanced package tracking feature." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={classNames(layout.main, style.tracking)}>
        <section className={classNames(layout.section, layout.container)}>
          <h2 className={layout.section__title}>Lacak Paketmu</h2>
          <p className={style.tracking__intro}>
            Sistem pelacakan kami akan mempermudah kamu untuk memonitor status paket kamu secara real-time
          </p>
          <div className={classNames(style.tracking__features, layout.grid)}>
            <div className={style.feature}>
              <img src="/images/tracking-real-time.svg" alt="Real-time Tracking" className={style.feature__image} />
              <h3 className={style.feature__title}>Real-time Tracking</h3>
              <p className={style.feature__description}>
                Awasi dimana paket kamu dikirimkan dengan menggunakan fitur pelacakan real-time kami
              </p>
            </div>
            <div className={style.feature}>
              <img src="/images/tracking-notifications.svg" alt="Notifications" className={style.feature__image} />
              <h3 className={style.feature__title}>Notifications</h3>
              <p className={style.feature__description}>
                Dapatkan notifikasi mengenai status pengiriman kamu
              </p>
            </div>
            <div className={style.feature}>
              <img src="/images/tracking-history.svg" alt="Tracking History" className={style.feature__image} />
              <h3 className={style.feature__title}>Tracking History</h3>
              <p className={style.feature__description}>
                Akses sejarah pengiriman paket kamu dengan lebih mudah
              </p>
            </div>
          </div>
          <div className={style.tracking__cta}>
            <h3 className={style.cta__title}>Mulai Lacak Sekarang</h3>
            <br />
            <input type="text" placeholder="Masukan nomor tracking" className={style.cta__input} />
            <button className={classNames(layout.button, style.cta__button)}>Lacak paket</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tracking;
