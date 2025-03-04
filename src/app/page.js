import Image from 'next/image';

import ContextProvider from '@/contexts/ContextProvider';
import UI from '@/components/UI';
import Main from '@/components/Main';

export default function Home() {
  return (
    <ContextProvider>
      <UI />
      <Main />
    </ContextProvider>
  );
}
