import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { ReactComponent as CreditCardIcon } from '@/images/credit-card.svg';
import { ReactComponent as PaypalIcon } from '@/images/paypal.svg';
import { ReactComponent as BankTransferIcon } from '@/images/bank-transfer.svg';
import classNames from 'classnames';
import layout from '@/styles/Layout.module.scss';
import style from '@/styles/Payment.module.scss';

const Payment = () => {
  return (
    <div>
      <Head>
        <title>Payment Options - Delivery Services</title>
        <meta name="description" content="Explore various payment options for our delivery services." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={classNames(layout.main, style.payment)}>
        <section className={classNames(layout.section, layout.container)}>
          <h2 className={layout.section__title}>Pilihan Pembayaran</h2>
          <div className={classNames(style.payment__container, layout.grid)}>
            <div className={style.payment__option}>
              <CreditCardIcon className={style.payment__icon} />
              <h3 className={style.payment__title}>Credit/Debit Card</h3>
              <p className={style.payment__description}>
              Kami menerima kartu kredit/debit Visa dan Mastercard
              </p>
            </div>
            <div className={style.payment__option}>
              <PaypalIcon className={style.payment__icon} />
              <h3 className={style.payment__title}>PayPal</h3>
              <p className={style.payment__description}>
                PayPal mempermudah proses pembayaran internasional
              </p>
            </div>
            <div className={style.payment__option}>
              <BankTransferIcon className={style.payment__icon} />
              <h3 className={style.payment__title}>Bank Transfer</h3>
              <p className={style.payment__description}>
                Transfer secara langsung dari bank pilihan anda
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Payment;