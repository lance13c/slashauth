import ActionBar from '@ui/ActionBar';
import ContentPadding from '@ui/ContentPadding';
import Main from '@ui/Main';
import PageLayout from '@ui/PageLayout';
import TicketList from '@ui/TicketList';
import { AnimatePresence } from 'framer-motion';

export default function Home() {
  return (
    <PageLayout>
      <AnimatePresence mode='wait'>
        <Main>
          <ContentPadding>
            <div
              style={{
                marginTop: '2rem',
              }}
            ></div>
            <ActionBar />
            <TicketList />
          </ContentPadding>
          {/* Adds some padding to bottom of page */}
          <div
            style={{
              height: '40rem',
            }}
          ></div>
        </Main>
      </AnimatePresence>
    </PageLayout>
  );
}
