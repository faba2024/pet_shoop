export default function NotFound() {
  return (
    <main className="grid min-h-[100svh] place-items-center bg-paper px-6 text-center">
      <div>
        <p className="label text-mute">Erro 404</p>
        <h1 className="heading mt-4 text-[clamp(2.4rem,6vw,4rem)]">Essa página fugiu <em className="text-pink">pro quintal.</em></h1>
        <a href="/" className="btn btn-primary mt-8">Voltar ao início</a>
      </div>
    </main>
  );
}
