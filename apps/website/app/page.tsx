import { button } from '@brito/styles';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center gap-4 p-24'>
      <button className={button.primary}>Test</button>
      <button className={`${button.secondary}`}>Test</button>
      <button className={`${button.primary} ${button.disabled}`}>Test</button>
    </main>
  );
}
