import Hero from "@/components/sections/Hero";

export default function Home() {
    return (
      <main id="main" className="pt-16 flex-1 flex flex-col w-full">
        <section className="relative section">
          {/* Top Ambient Ambient Backdrops */}
          <div className="absolute -top-32 left-1/4 size-125 bg-primary/10 rounded-full blur-[128px] pointer-events-none"></div>
          <div className="absolute top-24 right-10 size-125 bg-secondary/10 rounded-full blur-[140px] pointer-events-none"></div>

          <Hero />
        </section>
      </main>
    );
}
