import { ApolloProvider } from '@apollo/client';
import Head from 'next/head';
import { SnackbarProvider } from 'notistack';
import client from '../lib/client/apolloClient';
import '../styles/global.scss';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <style>@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');</style>
      </Head>

      <ApolloProvider client={client}>
        <SnackbarProvider maxSnack={3}>
          <Component {...pageProps} />
        </SnackbarProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
