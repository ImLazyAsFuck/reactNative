import { createContext } from "react";

interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
}

const ProductsContext = createContext(null);

const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
};

export default ProductsProvider;
