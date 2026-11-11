import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
    return (
      <main id="main" className="relative pt-16 flex-1 flex flex-col w-full overflow-hidden">
        {/* Top Ambient Ambient Backdrops */}
        <div className="absolute -top-32 left-1/4 size-125 bg-primary/10 rounded-full blur-[128px] pointer-events-none"></div>
        <div className="absolute top-24 right-10 size-125 bg-secondary/10 rounded-full blur-[140px] pointer-events-none"></div>

        <Hero />

        {/* 2. TECHNICAL SKILLS GRID */}
        <Skills />

        {/* 3. PROJECTS */}
        <Projects />

        {/* 4. ABOUT */}
        <About />

        {/* 5. CONTACT */}
        <Contact />
      </main>
    );
}
