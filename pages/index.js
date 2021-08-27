import client from '../apollo-client';
import { gql } from '@apollo/client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

import ClientOnly from '../components/ClientOnly';
import NavBar from '../components/NavBar';
import Instructions from '../components/Instructions';
import Hospitals from '../components/Hospitals';
import NearestHospitals from '../components/NearestHospitals';
import Footer from '../components/Footer';

export async function getServerSideProps(context) {
  const YELP_QUERY = gql`
    query getHospitals {
      search(
        categories: "emergencypethospital"
        latitude: ${parseFloat(context.query.lat)}
        longitude: ${parseFloat(context.query.long)}
        open_now: true
        sort_by: "distance"
        limit: 5,
      ) {
        business {
          id
          name
          rating
          distance
          display_phone
          location {
            formatted_address
          }
          hours {
            open {
              start
              end
              day
            }
          }
        }
      }
    }
  `;
  let yelpData;
  let error = null;

  // data has to be named data
  try {
    const { data } = await client.query({
      query: YELP_QUERY,
    });
    yelpData = data;
  } catch (e) {
    error = e.message;
  }

  return {
    props: {
      yelpData: yelpData ? yelpData.search.business : [{}],
      error: error,
    },
  };
}

export default function Home({ yelpData }) {
  const [buttonClicked, setButtonClicked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteStart = (url, { shallow }) => {
      console.log(
        `App is changing to ${url} ${
          shallow ? 'with' : 'without'
        } shallow routing`,
      );
      if (url.startsWith('/?')) {
        setButtonClicked(true);
      }
    };
    const handleRouteComplete = (url, { shallow }) => {
      console.log('Route change complete.');
      if (url.startsWith('/?')) {
        setButtonClicked(false);
      }
    };

    router.events.on('routeChangeStart', handleRouteStart);
    router.events.on('routeChangeComplete', handleRouteComplete);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    // return () => {
    //   router.events.off('routeChangeStart', handleRouteChange);
    // };
  }, []);

  // TODO: handle error
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
                {yelpData.length > 1 && <NearestHospitals refresh={true} />}
              </h3>
              {!buttonClicked && yelpData.length == 1 && (
                <NearestHospitals refresh={false} />
              )}
              {buttonClicked &&
                yelpData.map((hospitalData, index) => (
                  <Hospitals
                    key={hospitalData.id || index}
                    data={hospitalData}
                    index={index}
                  />
                ))}
              {yelpData.length > 1 &&
                yelpData.map((hospitalData, index) => (
                  <Hospitals
                    key={hospitalData.id || index}
                    data={hospitalData}
                    index={index}
                  />
                ))}
            </section>
          </main>
        </ClientOnly>
      </div>
      <Footer />
    </>
  );
}
