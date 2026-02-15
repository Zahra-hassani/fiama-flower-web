import {hashSync} from "bcrypt-ts-edge"; 
export const SampleProducts = {
  users: [
    {
      name: "Ahmad",
      email: "ahmad@gmail.com",
      role: "user",
      password: hashSync("12345",14)
    },
    {
      name: "Mahsa",
      email: "mahsa@gmail.com",
      role: "user",
      password: hashSync("12355",14)
    },
    {
      name: "Bahar",
      email: "bahar@gmail.com",
      role: "admin",
      password: hashSync("12346",14)
    },
  ],
  products: [
    {
      name: "Cotton hoodies for men",
      slug: "Cotton-hoodies-for-men",
      category: "Hoodies",
      description: "made from cotton, soft and comfortable.",
      images: [
        "/images/product-5-1.jpg",
        "/images/product-5-2.jpg"
      ],
      price: 25.90,
      brand: "Hoodies",
      rating: 4.5,
      numReviews: 128,
      stock: 25,
      isFeatured: true,
      banner: "/images/banners/headphones-banner.jpg"
    },
    {
      name: "Half sleeve T-shirt for men",
      slug: "Half-sleeve-Tshirt-for-men",
      category: "T-shirt",
      description: "light and great choice for summer days.",
      images: [
        "/images/product-6-1.jpg",
        "/images/product-6-2.jpg"
      ],
      price: 15.94,
      brand: "T-shirt",
      rating: 2.2,
      numReviews: 64,
      stock: 40,
      isFeatured: false,
      banner: "/images/banners/shoes-banner.jpg"
    },
    {
      name: "5-6 Years boy shirt",
      slug: "5-6-Years-boy-shirt",
      category: "Shirt",
      description: "light and great choice for summer days.",
      images: [
        "/images/product-7-1.jpg",
        "/images/product-7-2.jpg"
      ],
      price: 32.99,
      brand: "Shirt",
      rating: 4.7,
      numReviews: 64,
      stock: 40,
      isFeatured: false,
      banner: "/images/banners/shoes-banner.jpg"
    },
    {
      name: "4-6 Years girl top",
      slug: "4-6-Years-girl-top",
      category: "Top",
      description: "light and great choice for summer days.",
      images: [
        "/images/product-8-1.jpg",
        "/images/product-8-2.jpg"
      ],
      price: 15.99,
      brand: "Top",
      rating: 4.2,
      numReviews: 64,
      stock: 0,
      isFeatured: false,
      banner: "/images/banners/shoes-banner.jpg"
    },
    {
      name: "Leather belt for men",
      slug: "Leather-belt-for-men",
      category: "Belt",
      description: ".",
      images: [
        "/images/product-25-1.jpg",
        "/images/product-25-2.jpg"
      ],
      price: 25.99,
      brand: "Belt",
      rating: 3.2,
      numReviews: 64,
      stock: 0,
      isFeatured: false,
      banner: "/images/banners/shoes-banner.jpg"
    },
    {
      name: "Men's sport shorts",
      slug: "Men's-sport-shorts",
      category: "Shorts",
      description: "light and great choice for summer days.",
      images: [
        "/images/product-13-1.jpg",
        "/images/product-13-2.jpg"
      ],
      price: 15.99,
      brand: "Shorts",
      rating: 3.2,
      numReviews: 64,
      stock: 30,
      isFeatured: false,
      banner: "/images/banners/shoes-banner.jpg"
    },
    {
      name: "Sandles for men",
      slug: "Sandles-for-men",
      category: "Sandles",
      description: "light and great choice for summer days.",
      images: [
        "/images/product-17-1.jpg",
        "/images/product-17-2.jpg"
      ],
      price: 25.99,
      brand: "Sandles",
      rating: 4.2,
      numReviews: 64,
      stock: 20,
      isFeatured: false,
      banner: "/images/banners/shoes-banner.jpg"
    },
    {
      name: "Beauty makeup kit",
      slug: "Beauty-makeup-kit",
      category: "Makeup",
      description: "light and great choice for summer days.",
      images: [
        "/images/product-8-1.jpg",
        "/images/product-8-2.jpg"
      ],
      price: 25.99,
      brand: "Makeup",
      rating: 3.2,
      numReviews: 64,
      stock: 10,
      isFeatured: false,
      banner: "/images/banners/shoes-banner.jpg"
    },
    {
      name: "Flower fragence perfume",
      slug: "Flower fragence perfume",
      category: "Perfume",
      description: "light and great choice for summer days.",
      images: [
        "/images/product-26-1.jpg",
        "/images/product-26-2.jpg"
      ],
      price: 66.99,
      brand: "Perfume",
      rating: 4.2,
      numReviews: 64,
      stock: 30,
      isFeatured: false,
      banner: "/images/banners/shoes-banner.jpg"
    },
    {
      name: "Men's official suits",
      slug: "Men's official suits",
      category: "Suits",
      description: "light and great choice for summer days.",
      images: [
        "/images/product-14-1.jpg",
        "/images/product-14-2.jpg"
      ],
      price: 29.99,
      brand: "Suits",
      rating: 4.9,
      numReviews: 64,
      stock: 10,
      isFeatured: false,
      banner: "/images/banners/shoes-banner.jpg"
    },
    {
      name: "Jewellery 22k gold nacklace",
      slug: "Jewellery 22k gold nacklace",
      category: "Jewellery",
      description: "light and great choice for summer days.",
      images: [
        "/images/product-8-1.jpg",
        "/images/product-8-2.jpg"
      ],
      price: 2587.99,
      brand: "Jewellery",
      rating: 4.5,
      numReviews: 64,
      stock: 10,
      isFeatured: false,
      banner: "/images/banners/shoes-banner.jpg"
    },
    {
      name: "Men's half sleeve t-shirt",
      slug: "Men's-half-sleeve-t-shirt",
      category: "T-shirt",
      description: "light and great choice for summer days.",
      images: [
        "/images/product-10-1.jpg",
        "/images/product-10-2.jpg"
      ],
      price: 25.99,
      brand: "T-shirt",
      rating: 4.2,
      numReviews: 64,
      stock: 0,
      isFeatured: false,
      banner: "/images/banners/shoes-banner.jpg"
    },
    // {
    //   name: "Beauty makeup kit",
    //   slug: "Beauty-makeup-kit",
    //   category: "Makeup",
    //   description: "light and great choice for summer days.",
    //   images: [
    //     "/images/product-8-1.jpg",
    //     "/images/product-8-2.jpg"
    //   ],
    //   price: 25.99,
    //   brand: "Makeup",
    //   rating: 3.2,
    //   numReviews: 64,
    //   stock: 10,
    //   isFeatured: false,
    //   banner: "/images/banners/shoes-banner.jpg"
    // },
  ]
}
