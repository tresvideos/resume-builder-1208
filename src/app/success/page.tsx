
'use client';
import Link from 'next/link';

export default function Success() {
  return (
    <main className="mx-auto max-w-2xl p-6 text-center">
      <h1 className="mb-4 text-2xl font-semibold">¡Pago simulado completado!</h1>
      <p className="mb-6 text-gray-600">Tu acceso de prueba de 48 horas está activo. Ya puedes descargar tu CV.</p>
      <div className="flex items-center justify-center gap-3">
        <Link href="/resume-builder" className="rounded bg-black px-4 py-2 text-white">Volver al builder</Link>
        <form action="/api/subscription/cancel" method="post">
          <button className="rounded border px-4 py-2">Cancelar acceso</button>
        </form>
      </div>
    </main>
  );
}
