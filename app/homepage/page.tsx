export default function HomePage() {
  return (
    <main className="min-h-screen font-sans bg-background text-foreground">
      <div className="w-full md:h-[80%] h-1/2 absolute bottom-0 left-0 md:object-contain object-bottom object-cover">

      </div>
      {/* Top Nav */}
      <header className="flex justify-between items-center px-8 py-6">
        <div className="text-2xl font-bold text-pink-600">LOGO</div>
        <nav className="space-x-6 hidden md:flex">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Studio</a>
          <a href="#" className="hover:underline">Work</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
        <div className="w-4 h-4 bg-black rounded-full"></div>
      </header>

      {/* Image Grid */}
      <section className="px-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="h-48 bg-gray-300 rounded"></div>
        <div className="h-48 bg-orange-300 rounded"></div>
        <div className="h-48 bg-pink-200 rounded"></div>
        <div className="h-48 bg-yellow-300 rounded"></div>
      </section>

      {/* Bottom Section */}
      <section className="px-8 mt-12 flex flex-col md:flex-row justify-between items-start">
        {/* Play Reel */}
        <div className="space-y-2">
          <button className="text-sm font-medium underline">Play Reel ▶</button>
          <div className="w-72 h-40 bg-blue-300 rounded"></div>
        </div>

        {/* Center Dot */}
        <div className="hidden md:block w-8 h-8 border-2 border-black rounded-full mx-8 mt-20"></div>

        {/* Text Block */}
        <div className="mt-10 md:mt-0 max-w-xl">
          <p className="text-sm uppercase tracking-wide">Studio Nuts®</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-2">
            THINKING BOLDLY.<br />
            CRAFTING VISUALLY.
          </h1>
          <p className="mt-4 text-muted">
            Not just makers. Campaign creators. Visual disruptors.
          </p>
          <a href="#" className="mt-4 inline-block text-sm underline">Explore All Work</a>
          <p className="text-xs mt-2 text-gray-500">(Scroll)</p>
        </div>
      </section>
    </main>
  );
}