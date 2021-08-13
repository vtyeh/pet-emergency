import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // uri: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/graphql",  // use this if fetching from client side
  uri: "https://api.yelp.com/v3/graphql", // use this if fetching from server side
  headers: {
    Authorization: `Bearer ${process.env.YELP_API_TOKEN}`,
    "Accept-Language": "en-US",
  },
  cache: new InMemoryCache(),
});

export default client;
