import Header from '@/components/Header'
import HeroCarousel from '@/components/HeroCarousel'
import GenerateSection from '@/components/GenerateSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroCarousel />
      <GenerateSection />
      <Footer />
    </main>
  )
}