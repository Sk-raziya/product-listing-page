import ProductGrid from "@/components/product-grid"
import FilterSidebar from "@/components/filter-sidebar"
import { getProductsByCategory } from "@/lib/api"
import Link from "next/link"

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const decodedCategory = decodeURIComponent(params.category)
  const products = await getProductsByCategory(decodedCategory)

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/categories" className="text-primary hover:underline">
          ← Back to categories
        </Link>
        <h1 className="text-3xl font-bold mt-2 capitalize">{decodedCategory}</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4 lg:w-1/5">
          <FilterSidebar />
        </div>

        <div className="w-full md:w-3/4 lg:w-4/5">
          <ProductGrid products={products} />
        </div>
      </div>
    </main>
  )
}
