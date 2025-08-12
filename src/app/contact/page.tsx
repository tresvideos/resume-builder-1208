
export default function Contact() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="mb-4 text-2xl font-semibold">Contacto</h1>
      <form className="grid gap-3">
        <input className="rounded border p-2" placeholder="Tu email" />
        <textarea className="rounded border p-2" placeholder="Tu mensaje" rows={5} />
        <button className="w-fit rounded bg-black px-4 py-2 text-white">Enviar</button>
      </form>
    </main>
  );
}
