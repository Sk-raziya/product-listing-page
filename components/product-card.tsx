import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product & {
    originalPrice?: number
    discountPercentage?: number
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <Link href={`/product/${product.id}`}>
        <div className="relative h-64 bg-gray-100">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "contain", padding: "1rem" }}
            priority={false}
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h2 className="text-lg font-medium line-clamp-2 mb-2">{product.title}</h2>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {product.category}
            </span>
          </div>
          <p className="text-gray-600 text-sm line-clamp-2 mb-3">{product.description}</p>
          <div className="flex justify-between items-center">
            <div>
              <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice.toFixed(2)}</span>
                  <span className="ml-2 bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded">
                    {product.discountPercentage}% OFF
                  </span>
                </>
              )}
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-1 text-sm text-gray-600">
                {product.rating.rate} ({product.rating.count})
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
