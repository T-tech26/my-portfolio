import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

export default function Home() {
    return (
      <main className="min-h-screen bg-background pt-16 text-on-surface flex flex-col">
          <Header />
          <div className="flex-1"></div>
          <Footer />
      </main>
    );
}
