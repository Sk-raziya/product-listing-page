import { getProducts } from "@/lib/api"
import ProductGrid from "@/components/product-grid"

export default async function DealsPage() {
  // In a real app, you would fetch products with deals/discounts
  // For this demo, we'll just show all products and pretend they're on sale
  const allProducts = await getProducts()

  // Simulate deals by adding a discount percentage to each product
  const productsWithDeals = allProducts.map((product) => ({
    ...product,
    originalPrice: product.price,
    price: Number.parseFloat((product.price * 0.8).toFixed(2)), // 20% off
    discountPercentage: 20,
  }))

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-2">Special Deals</h1>
        <p className="text-gray-700">Limited time offers on our best products. Don't miss out!</p>
      </div>

      <ProductGrid products={productsWithDeals} />
    </main>
  )
}
