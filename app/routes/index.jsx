import { useEffect } from 'react';
// import { redirect } from 'remix';

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      console.log('redirect...');
      window.location.href = '/en/';
    }, 0);
  }, []);
  return (
    <div>
      <h1>^?^</h1>
    </div>
  );
}
