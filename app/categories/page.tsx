import Link from "next/link"
import Image from "next/image"
import { getCategories } from "@/lib/api"

export default async function CategoriesPage() {
  const categories = await getCategories()

  // Category images (in a real app, these would come from your API or CMS)
  const categoryImages = {
    electronics: "/placeholder.svg?height=400&width=600",
    jewelery: "/placeholder.svg?height=400&width=600",
    "men's clothing": "/placeholder.svg?height=400&width=600",
    "women's clothing": "/placeholder.svg?height=400&width=600",
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Product Categories</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link key={category} href={`/category/${encodeURIComponent(category)}`} className="group">
            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
              <div className="relative h-48 bg-gray-100">
                <Image
                  src={
                    categoryImages[category as keyof typeof categoryImages] || "/placeholder.svg?height=400&width=600"
                  }
                  alt={category}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold capitalize group-hover:text-primary transition-colors">
                  {category}
                </h2>
                <p className="text-gray-600 mt-2">Browse all {category} products</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
