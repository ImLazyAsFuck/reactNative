import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
  description?: string;
}

interface ProductsContextType {
  products: Product[];
  addProduct: (product: Omit<Product, "id">) => Promise<boolean>;
  updateProduct: (id: string, product: Omit<Product, "id">) => Promise<boolean>;
  deleteProduct: (id: string) => Promise<boolean>;
  getProduct: (id: string) => Product | undefined;
  isLoading: boolean;
}

const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

const STORAGE_KEY = "@products";

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};

const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const storedProducts = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedProducts) {
        setProducts(JSON.parse(storedProducts));
      }
    } catch (error) {
      console.error("Error loading products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveProducts = async (newProducts: Product[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newProducts));
      setProducts(newProducts);
      return true;
    } catch (error) {
      console.error("Error saving products:", error);
      return false;
    }
  };

  const addProduct = async (
    productData: Omit<Product, "id">
  ): Promise<boolean> => {
    if (!productData.name.trim()) {
      throw new Error("Tên sản phẩm không được để trống");
    }

    if (productData.quantity <= 0) {
      throw new Error("Số lượng phải lớn hơn 0");
    }

    if (productData.price <= 0) {
      throw new Error("Giá phải lớn hơn 0");
    }

    const existingProduct = products.find(
      (p) => p.name.toLowerCase() === productData.name.toLowerCase()
    );
    if (existingProduct) {
      throw new Error("Tên sản phẩm đã tồn tại");
    }

    const newProduct: Product = {
      ...productData,
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    };

    const newProducts = [...products, newProduct];
    return await saveProducts(newProducts);
  };

  const updateProduct = async (
    id: string,
    productData: Omit<Product, "id">
  ): Promise<boolean> => {
    if (!productData.name.trim()) {
      throw new Error("Tên sản phẩm không được để trống");
    }

    if (productData.quantity <= 0) {
      throw new Error("Số lượng phải lớn hơn 0");
    }

    if (productData.price <= 0) {
      throw new Error("Giá phải lớn hơn 0");
    }

    const existingProduct = products.find(
      (p) =>
        p.name.toLowerCase() === productData.name.toLowerCase() && p.id !== id
    );
    if (existingProduct) {
      throw new Error("Tên sản phẩm đã tồn tại");
    }

    const newProducts = products.map((p) =>
      p.id === id ? { ...productData, id } : p
    );
    return await saveProducts(newProducts);
  };

  const deleteProduct = async (id: string): Promise<boolean> => {
    const newProducts = products.filter((p) => p.id !== id);
    return await saveProducts(newProducts);
  };

  const getProduct = (id: string): Product | undefined => {
    return products.find((p) => p.id === id);
  };

  const value: ProductsContextType = {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    isLoading,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
