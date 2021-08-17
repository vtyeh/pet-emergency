import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import kimchi from "../public/kimchi.jpg";

export default function AboutUs() {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <Head>
          <title>PetEmergency</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
        </Head>

        <main>
          <h1>hi, we&#39;re LOc & VEnessa!</h1>
          <p>
            We created this app in loving memory of our orange tabby, Kimchi.{" "}
            <br /> He was our sunshine on a rainy day and the kindest soul
            we&#39;ve ever met. But on one random Taco Tuesday night, he fell
            from his cat tower. He was limp and gasping for air as we held him,
            helpless with no one to turn to. The only thing I knew to do was
            call 911 but it was the wrong number for animal emergencies. In our
            state of panic, we went to the closest animal hospital but it was
            closed. I couldn&#39;t find the simple words and requirements such
            as &quo;emergency&quo; or &quo;open now&quo;. If we had just been a
            few minutes faster in finding a nearby animal hospital, perhaps we
            could&#39;ve saved our loving boy.
          </p>
          <p>
            We designed this app to provide you with straightforward, life
            saving instructions and to get you off it as fast as possible to the
            nearest pet hospital if you feel the need.
          </p>
          <p>
            We strive to be inclusive. Although our main audience is cat and dog
            owners, we are actively working to become more inclusive of other
            animals, such as reptilian friends. Please be patient with us!
          </p>
          <Image src={kimchi} alt="kimchi" />
        </main>
      </div>
      <Footer />
    </>
  );
}
