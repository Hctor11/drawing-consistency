import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main className="min-h-screen justify-between p-2 sm:p-4 md:p-6 lg:p-8">
      <header className="mb-4">
        <h1 className="font-bold text-xl">Drawing practices</h1>
        <p>
          All of my drawing practices and my evolution in my drawing technique.
        </p>
      </header>
      <main className="flex justify-center items-center">
        <Gallery />
      </main>
    </main>
  );
}
