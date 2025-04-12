"use client"

import { useState } from "react"
import type { Product } from "@/lib/types"

interface AddToCartButtonProps {
  product: Product
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)

    // Simulate adding to cart
    setTimeout(() => {
      setIsAdding(false)
      // Here you would typically update a cart context or make an API call
      console.log(`Added ${quantity} of ${product.title} to cart`)
    }, 1000)
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="border rounded-l-md px-3 py-2 hover:bg-gray-50"
        >
          -
        </button>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
          className="border-t border-b w-12 text-center py-2"
        />
        <button onClick={() => setQuantity(quantity + 1)} className="border rounded-r-md px-3 py-2 hover:bg-gray-50">
          +
        </button>
      </div>

      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary/90 transition-colors disabled:bg-primary/70"
      >
        {isAdding ? "Adding..." : "Add to Cart"}
      </button>
    </div>
  )
}
