// app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <h1>Organiseer je favoriete recepten!</h1>
      <Link href="/recepten">
        <button>Bekijk recepten</button>
      </Link>
    </main>
  );
}
