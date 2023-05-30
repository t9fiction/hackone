import { PortableTextBlock } from "sanity";

export type Product = {
  _id: string;
  _createdAt: Date;
  name: string;
  image: string;
  special: boolean;
  price: number;
  category: string;
  content: PortableTextBlock[];
  alt:string;
};
