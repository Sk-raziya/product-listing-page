import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ShopHub - Product Listing",
  description: "Browse our amazing products",
    
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <footer className="bg-gray-100 py-8 mt-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">ShopHub</h3>
                  <p className="text-gray-600">Your one-stop shop for all your needs.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Shop</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-gray-600 hover:text-primary">
                        All Products
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-primary">
                        Featured
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-primary">
                        New Arrivals
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-primary">
                        Sale
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Company</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-gray-600 hover:text-primary">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-primary">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-primary">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-primary">
                        Terms & Conditions
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
                  <p className="text-gray-600 mb-4">Subscribe to our newsletter for updates.</p>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-primary focus:border-primary"
                    />
                    <button className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary/90">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              <div className="border-t mt-8 pt-8 text-center text-gray-600">
                <p>&copy; {new Date().getFullYear()} ShopHub. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'