import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export async function fetchLimitProducts() {
  const response = await fetch('https://dummyjson.com/products?limit=8');
  const result = await response.json();
  return result.products;
}

export async function fetchProducts(skip) {
  const response = await fetch(`https://dummyjson.com/products?limit=8&skip=${skip}`);
  const result = await response.json();
  return result;
}

export async function fetchLimitProductDetails(id) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const result = await response.json();
  return result;
}

export async function fetchLimitCategories() {
  const response = await fetch('https://dummyjson.com/products/categories');
  const result = await response.json();
  const maxStartIndex = result.length - 4;
  const startIndex = Math.floor(Math.random() * (maxStartIndex + 1));
  return result.slice(startIndex,startIndex+4);
}

export async function fetchCategories() {
  const response = await fetch('https://dummyjson.com/products/categories');
  const result = await response.json();
  const maxStartIndex = result.length - 6;
  const startIndex = Math.floor(Math.random() * (maxStartIndex + 1));
  return result.slice(startIndex,startIndex+6);
}

export async function fetchProductByCategory(slug) {
  const response = await fetch(`https://dummyjson.com/products/category/${slug}`);
  const result = await response.json();
  return result.products;
}