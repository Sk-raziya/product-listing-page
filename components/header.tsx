"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { User } from "@/lib/types"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("user")
    setUser(null)
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            ShopHub
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link
                href="/"
                className={`hover:text-primary ${pathname === "/" ? "text-primary font-medium" : "text-gray-600"}`}
              >
                Home
              </Link>
              <Link
                href="/categories"
                className={`hover:text-primary ${pathname === "/categories" ? "text-primary font-medium" : "text-gray-600"}`}
              >
                Categories
              </Link>
              <Link
                href="/deals"
                className={`hover:text-primary ${pathname === "/deals" ? "text-primary font-medium" : "text-gray-600"}`}
              >
                Deals
              </Link>
              <Link
                href="/contact"
                className={`hover:text-primary ${pathname === "/contact" ? "text-primary font-medium" : "text-gray-600"}`}
              >
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              <Link href="/cart" className="text-gray-600 hover:text-primary relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Link>

              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex items-center text-gray-600 hover:text-primary"
                  >
                    <span className="mr-1">{user.name || user.email}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                      <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Profile
                      </Link>
                      <Link href="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Orders
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link href="/auth/login" className="text-primary hover:text-primary/90 font-medium">
                  Sign in
                </Link>
              )}
            </div>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-600 hover:text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t">
            <nav className="flex flex-col space-y-4 mb-4">
              <Link
                href="/"
                className={`hover:text-primary ${pathname === "/" ? "text-primary font-medium" : "text-gray-600"}`}
              >
                Home
              </Link>
              <Link
                href="/categories"
                className={`hover:text-primary ${pathname === "/categories" ? "text-primary font-medium" : "text-gray-600"}`}
              >
                Categories
              </Link>
              <Link
                href="/deals"
                className={`hover:text-primary ${pathname === "/deals" ? "text-primary font-medium" : "text-gray-600"}`}
              >
                Deals
              </Link>
              <Link
                href="/contact"
                className={`hover:text-primary ${pathname === "/contact" ? "text-primary font-medium" : "text-gray-600"}`}
              >
                Contact
              </Link>
            </nav>

            {user ? (
              <div className="border-t pt-4 flex flex-col space-y-4">
                <Link href="/profile" className="text-gray-600 hover:text-primary">
                  Profile
                </Link>
                <Link href="/orders" className="text-gray-600 hover:text-primary">
                  Orders
                </Link>
                <button onClick={handleLogout} className="text-left text-gray-600 hover:text-primary">
                  Sign out
                </button>
              </div>
            ) : (
              <div className="border-t pt-4">
                <Link href="/auth/login" className="text-primary hover:text-primary/90 font-medium">
                  Sign in
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  )
}
