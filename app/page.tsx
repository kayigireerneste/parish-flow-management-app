import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomeContent } from "@/components/home-content"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HomeContent />
      </main>
      <Footer />
    </div>
  )
}
