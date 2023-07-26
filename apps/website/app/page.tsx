import { Logo } from '@/components';
import { styles } from '@brito/styles';

export default function Home() {
  return (
    <main className={styles.container}>
      <Logo />
      <p className='p-4 text-red-600'>Comming soon!</p>
    </main>
  );
}
