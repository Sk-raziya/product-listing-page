import ProductGrid from "@/components/product-grid"
import FilterSidebar from "@/components/filter-sidebar"
import { getProducts } from "@/lib/api"

export default async function Home() {
  const products = await getProducts()

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Product Listing</h1>

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
