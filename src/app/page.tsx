import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Hero from "@/components/sections/Hero";

export default function Home() {
    return (
      <main className="min-h-screen bg-background pt-16 text-on-surface flex flex-col">
          <Header />
          <div className="flex-1 flex flex-col w-full">
              <div className="relative overflow-hidden w-full mx-auto max-w-7xl px-4 md:px-8">
                {/* Top Ambient Ambient Backdrops */}
                <div className="absolute -top-32 left-1/4 size-125 bg-primary/10 rounded-full blur-[128px] pointer-events-none"></div>
                <div className="absolute top-24 right-10 size-125 bg-secondary/10 rounded-full blur-[140px] pointer-events-none"></div>

                <Hero />
              </div>
          </div>
          <Footer />
      </main>
    );
}
