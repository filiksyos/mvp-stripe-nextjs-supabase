
import Header from "@/components/Header";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Header />
      <main className="flex-1">
        <section className="bg-gray-900 text-white py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Launch your MVP faster</h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">The ultimate boilerplate with Next.js, Stripe, and Supabase to get your SaaS up and running in no time.</p>
            <a href="#" className="inline-flex items-center justify-center rounded-md bg-purple-500 text-white px-8 py-3 text-lg font-medium hover:bg-purple-600 transition-colors">Get Started</a>
          </div>
        </section>
        <PricingSection />
      </main>
      <footer className="bg-gray-900 text-white py-6 px-4 md:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm text-gray-400">&copy; 2024 SaaS MVP. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
