import Head from 'next/head';
import styles from '../styles/Home.module.css';

import NavBar from '../components/NavBar';
import Instructions from '../components/Instructions';
import ClientOnly from '../components/ClientOnly';
import NearestHospitals from '../components/NearestHospitals';
import Footer from '../components/Footer';

export default function TestHospitalsList() {
  const data = {
    search: {
      business: [
        {
          id: 0,
          name: 'VCA West Coast Specialty and Emergency Animal Hospital',
          rating: 4,
          distance: 4246.947513161368,
          display_phone: '(714) 241-9001',
          hours: [
            {
              open: [
                {
                  start: '0000',
                  end: '0000',
                  day: 0,
                },
                {
                  start: '0000',
                  end: '0000',
                  day: 1,
                },
                {
                  start: '0000',
                  end: '0000',
                  day: 2,
                },
                {
                  start: '0000',
                  end: '0000',
                  day: 3,
                },
                {
                  start: '0000',
                  end: '0000',
                  day: 4,
                },
                {
                  start: '0000',
                  end: '0000',
                  day: 5,
                },
                {
                  start: '0000',
                  end: '0000',
                  day: 6,
                },
              ],
            },
          ],
          location: {
            formatted_address: '18300 Euclid St\nFountain Valley, CA 92708',
          },
        },
        {
          id: 1,
          name: 'Orange County Emergency Pet Clinic',
          rating: 3.5,
          distance: 4912.635167890639,
          display_phone: '(714) 462-1842',
          hours: [
            {
              open: [
                {
                  start: '0000',
                  end: '0800',
                  day: 0,
                },
                {
                  start: '1800',
                  end: '0000',
                  day: 0,
                },
                {
                  start: '0000',
                  end: '0800',
                  day: 1,
                },
                {
                  start: '1800',
                  end: '0000',
                  day: 1,
                },
                {
                  start: '0000',
                  end: '0800',
                  day: 2,
                },
                {
                  start: '1800',
                  end: '0000',
                  day: 2,
                },
                {
                  start: '0000',
                  end: '0800',
                  day: 3,
                },
                {
                  start: '1800',
                  end: '0000',
                  day: 3,
                },
                {
                  start: '0000',
                  end: '0800',
                  day: 4,
                },
                {
                  start: '1800',
                  end: '0000',
                  day: 4,
                },
                {
                  start: '0000',
                  end: '0800',
                  day: 5,
                },
                {
                  start: '1200',
                  end: '0000',
                  day: 5,
                },
                {
                  start: '0000',
                  end: '0000',
                  day: 6,
                },
              ],
            },
          ],
          location: {
            formatted_address:
              '12750 Garden Grove Blvd\nGarden Grove, CA 92843',
          },
        },
        {
          id: 2,
          name: 'Boove Emergency Pet Clinic',
          rating: 3.5,
          distance: 4912.635167890639,
          display_phone: '(714) 462-1842',
          hours: [
            {
              open: [
                {
                  start: '0000',
                  end: '0800',
                  day: 0,
                },
                {
                  start: '1800',
                  end: '0000',
                  day: 0,
                },
                {
                  start: '0000',
                  end: '0800',
                  day: 1,
                },
                {
                  start: '1800',
                  end: '0000',
                  day: 1,
                },
                {
                  start: '0000',
                  end: '0800',
                  day: 2,
                },
                {
                  start: '1800',
                  end: '0000',
                  day: 2,
                },
                {
                  start: '0000',
                  end: '0800',
                  day: 3,
                },
                {
                  start: '1800',
                  end: '0000',
                  day: 3,
                },
                {
                  start: '0000',
                  end: '0800',
                  day: 4,
                },
                {
                  start: '1800',
                  end: '0000',
                  day: 4,
                },
                {
                  start: '0000',
                  end: '0800',
                  day: 5,
                },
                {
                  start: '1200',
                  end: '0000',
                  day: 5,
                },
                {
                  start: '0000',
                  end: '0000',
                  day: 6,
                },
              ],
            },
          ],
          location: {
            formatted_address:
              '12750 Garden Grove Blvd\nGarden Grove, CA 92843',
          },
        },
      ],
    },
  };
  return (
    <>
      <Head>
        <title>PetEmergency</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <NavBar />
      <h1>
        Keep <span style={{ color: '#4798cf' }}>calm</span>. We are here to
        help.
      </h1>
      <div className={styles.container}>
        <ClientOnly>
          <main className={styles.main}>
            <Instructions />
            <section>
              <h3 className={styles.refreshHeader}>
                Nearest emergency pet hospitals
                {data ? <NearestHospitals refresh={true} /> : ''}
              </h3>
              <NearestHospitals refresh={false} />
            </section>
          </main>
        </ClientOnly>
      </div>
      <Footer />
    </>
  );
}
