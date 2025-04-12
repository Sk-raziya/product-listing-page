import type { Product } from "./types"

export async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products", { next: { revalidate: 3600 } })

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  return res.json()
}

export async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, { next: { revalidate: 3600 } })

  if (!res.ok) {
    throw new Error("Failed to fetch product")
  }

  return res.json()
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const res = await fetch(`https://fakestoreapi.com/products/category/${category}`, { next: { revalidate: 3600 } })

  if (!res.ok) {
    throw new Error("Failed to fetch products by category")
  }

  return res.json()
}

export async function getCategories(): Promise<string[]> {
  const res = await fetch("https://fakestoreapi.com/products/categories", { next: { revalidate: 3600 } })

  if (!res.ok) {
    throw new Error("Failed to fetch categories")
  }

  return res.json()
}
