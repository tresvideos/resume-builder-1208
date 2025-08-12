
'use client';
import Link from 'next/link';

export default function Cancel() {
  return (
    <main className="mx-auto max-w-2xl p-6 text-center">
      <h1 className="mb-4 text-2xl font-semibold">Proceso cancelado</h1>
      <p className="mb-6 text-gray-600">No se ha activado el acceso. Puedes volver a intentarlo cuando quieras.</p>
      <Link href="/resume-builder" className="rounded bg-black px-4 py-2 text-white">Volver al builder</Link>
    </main>
  );
}
