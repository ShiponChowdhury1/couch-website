// Product Types
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: ProductCategory;
  stock: number;
  rating?: number;
  featured?: boolean;
}

export type ProductCategory = 'sofa' | 'table' | 'chair' | 'bed' | 'storage' | 'other';

// Cart Types
export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

// Order Types
export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  createdAt: string;
}

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

// Bundle Types
export interface Bundle {
  id: string;
  title: string;
  description: string;
  products: Product[];
  price: number;
  discount: number;
  image: string;
  category: 'living-room' | 'bedroom' | 'dining-room' | 'office';
}

// Rental Types
export interface RentalProduct extends Omit<Product, 'price'> {
  rentalPricePerMonth: number;
  minRentalPeriod: number; // in months
  securityDeposit: number;
}

export interface RentalOrder {
  id: string;
  userId: string;
  product: RentalProduct;
  startDate: string;
  endDate: string;
  status: RentalStatus;
  totalCost: number;
}

export type RentalStatus = 'active' | 'completed' | 'cancelled';

// UI State Types
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}
