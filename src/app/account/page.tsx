
'use client';
export default function Account() {
  const cancel = async () => {
    await fetch('/api/subscription/cancel', { method: 'POST' });
    alert('Acceso cancelado (simulado).');
  };
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="mb-4 text-2xl font-semibold">Mi cuenta</h1>
      <p className="text-sm text-gray-600">Estado de acceso simulado basado en cookie 'entitled'.</p>
      <button onClick={cancel} className="mt-4 rounded border px-4 py-2">Cancelar acceso</button>
    </main>
  );
}
