import { ApolloProvider } from '@apollo/client';
import client from '../lib/client/apolloClient';
import '../styles/global.scss';

function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
