export type typeUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  role?: "customer" | "admin";
  address?: {
    street?: string;
    city?: string;
    zip?: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
};

export const users: typeUser[] = [];
export type typeProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
};
