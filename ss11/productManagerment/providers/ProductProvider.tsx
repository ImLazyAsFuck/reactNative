import { IProduct } from "@/interface/Product.interface";
import React, { createContext } from "react";

const productsReducer = (state: IProduct[], action: any) => {
  switch (action.type) {
    case "setProducts":
      return action.products;
    case "addProduct":
      return [...state, action.product];
    case "updateProduct":
      return state.map((product) =>
        product.id === action.product.id ? action.product : product
      );
    case "deleteProduct":
      return state.filter((product) => product.id !== action.id);
    case "getProductById":
      return state.find((product) => product.id === action.id);
  }
};


interface ProductContextType {
  products: IProduct[];
  setProducts: (products: IProduct[]) => void;
  addProduct: (product: IProduct) => void;
  updateProduct: (product: IProduct) => void;
  deleteProduct: (id: string) => void;
  getProductById: (id: string) => IProduct | null;
}

const ProductContext = createContext<ProductContextType | null>(null);

interface ProductProviderProps {
  children: React.ReactNode;
}

const ProductProvider = ({ children }: ProductProviderProps) => {
  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        addProduct,
        updateProduct,
        deleteProduct,
        getProductById,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
