import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

function PetEmergencyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default PetEmergencyApp;
