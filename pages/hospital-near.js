import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import Instructions from "../components/Instructions";

import client from "../apollo-client";

import ClientOnly from "../components/ClientOnly";
import Hospitals from "../components/Hospitals";

import { gql } from "@apollo/client";

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
  let error;

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
      yelpData: yelpData ? yelpData.search.business : error,
    },
  };
}

export default function ServerSide({ yelpData }) {
  // TODO: error handling
  return (
    <div className={styles.container}>
      <Head>
        <title>PetEmergency</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <h2>
        Keep <span style={{ color: "#237ae1" }}>calm</span>. We are here to
        help.
      </h2>

      <main className={styles.main}>
        <Instructions />
        <section className={styles.nearestHospitals}>
          <h3>Nearest emergency pet hospitals</h3>
          <ClientOnly>
            <Hospitals data={yelpData} />
          </ClientOnly>
        </section>
      </main>

      <footer className={styles.footer}>
        Created with and by LOVE. Powered by Taiwanese tea. Copyright © 2021.
        <br />
        In loving memory of Kimchi 🧡
      </footer>
    </div>
  );
}
