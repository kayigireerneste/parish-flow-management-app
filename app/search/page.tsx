import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SearchContent } from "@/components/search-content"

export default function SearchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-white">
        <SearchContent />
      </main>
      <Footer />
    </div>
  )
}
