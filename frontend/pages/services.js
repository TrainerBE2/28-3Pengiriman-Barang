// pages/services.js
import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import classNames from 'classnames';
import layout from '@/styles/Layout.module.scss';
import style from '@/styles/Services.module.scss';

const services = [
  {
    title: "Standard Delivery",
    description: "Pengiriman cepat dengan harga yang terjangkau",
    image: "/images/standard-delivery.jpg",
  },
  {
    title: "Express Delivery",
    description: "Paket dikirimkan hanya hitungan jam saja",
    image: "/images/express-delivery.png",
  },
  {
    title: "Same Day Delivery",
    description: "Paket akan diterima di hari yang sama",
    image: "/images/overnight-delivery.jpg",
  },
  {
    title: "International Delivery",
    description: "Pengiriman paket ke seluruh belahan dunia.",
    image: "/images/international-delivery.jpg",
  },
];

const Services = () => {
  return (
    <div>
      <Head>
        <title>Our Delivery Services</title>
        <meta name="description" content="Explore the various delivery services we offer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={classNames(layout.main, style.services)}>
        <section className={classNames(layout.section, layout.container)}>
          <h2 className={layout.section__title}>Pilihan Jasa Pengiriman Kami</h2>
          <div className={classNames(style.services__container, layout.grid)}>
            {services.map((service, index) => (
              <div key={index} className={style.card}>
                <img src={service.image} alt={service.title} className={style.card__image} />
                <h3 className={style.card__title}>{service.title}</h3>
                <p className={style.card__description}>{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;