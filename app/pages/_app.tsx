import { ApolloProvider } from '@apollo/client';
import { FilterProvider } from '@ui/context/FilterContext';
import Head from 'next/head';
import { SnackbarProvider } from 'notistack';
import client from '../lib/client/apolloClient';
import '../styles/global.scss';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <style>@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');</style>
      </Head>

      <ApolloProvider client={client}>
        <SnackbarProvider maxSnack={3}>
          <FilterProvider>
            <Component {...pageProps} />
          </FilterProvider>
        </SnackbarProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
