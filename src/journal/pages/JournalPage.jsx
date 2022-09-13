import { JournalLayout } from '../layout/JournalLayout';
import { NothingSelectedView, NotView } from '../views';

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView />
      {/* <NotView /> */}
    </JournalLayout>
  );
};
