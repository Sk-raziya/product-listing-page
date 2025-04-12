import Image from "next/image"
import Link from "next/link"
import { getProduct } from "@/lib/api"
import AddToCartButton from "@/components/add-to-cart-button"

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  return (
    <main className="container mx-auto px-4 py-8">
      <Link href="/" className="text-primary hover:underline mb-6 inline-block">
        ← Back to products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        <div className="bg-white p-6 rounded-lg">
          <div className="relative h-[400px] w-full">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>

        <div>
          <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {product.category}
          </span>
          <h1 className="text-2xl md:text-3xl font-bold mt-2">{product.title}</h1>

          <div className="flex items-center mt-4">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < Math.round(product.rating.rate) ? "text-yellow-400" : "text-gray-300"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-gray-600">
              {product.rating.rate} ({product.rating.count} reviews)
            </span>
          </div>

          <div className="mt-6">
            <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
          </div>

          <p className="mt-6 text-gray-700">{product.description}</p>

          <div className="mt-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <AddToCartButton product={product} />
              <button className="border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-50 transition-colors">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
