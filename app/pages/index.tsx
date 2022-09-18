import ActionBar from '@ui/ActionBar';
import Column from '@ui/Column';
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
            <Column>
              <div
                style={{
                  marginTop: '2rem',
                }}
              ></div>
              <ActionBar />
              <TicketList />
            </Column>
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
