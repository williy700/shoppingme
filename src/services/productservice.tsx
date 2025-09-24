import axios from "axios";

// ⚠️ Make sure this matches your backend API URL
const API_URL = "http://localhost:5000/api/products";

export interface Product {
  _id?: string;  // optional because new products don’t have id yet
  name: string;
  category: string;
  price: number;
  description?: string;
  image?: string;
}

// ✅ READ all products
export const getProducts = async (): Promise<Product[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};

// ✅ READ one product
export const getProduct = async (id: string): Promise<Product> => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

// ✅ CREATE product
export const createProduct = async (product: Product): Promise<Product> => {
  const res = await axios.post(API_URL, product);
  return res.data;
};

// ✅ UPDATE product
export const updateProduct = async (id: string, product: Partial<Product>): Promise<Product> => {
  const res = await axios.put(`${API_URL}/${id}`, product);
  return res.data;
};

// ✅ DELETE product
export const deleteProduct = async (id: string): Promise<{ message: string }> => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};
