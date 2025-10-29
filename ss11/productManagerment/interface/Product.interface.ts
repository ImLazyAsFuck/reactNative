import { EProductStatus } from "@/enums/product.enum";

export interface IProduct {
  id: string;
  name: string;
  price: number;
  status: EProductStatus;
}
