import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import PhotoGallery from '@/components/sections/PhotoGallery'
import Location from '@/components/sections/Location'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import SmoothScroll from '@/components/ui/SmoothScroll'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <SmoothScroll />
      <Header />
      <Hero />
      <Services />
      <About />
      <PhotoGallery />
      <Location />
      <Contact />
      <Footer />
    </main>
  )
}
