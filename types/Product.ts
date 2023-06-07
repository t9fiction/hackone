import { PortableTextBlock } from "sanity";

export type Product = {
  name: string;
  _id: number;
  slug: {
    _type: "slug";
    current: string;
  };
  images: {
    _type: "image";
    asset: {
      _ref: string;
    };
    alt?: string;
  }[];
  special?: boolean;
  price?: number;
  sizes: {
    size: "sm" | "md" | "lg" | "xl";
    quantity: number;
  }[];
  category: "men" | "women" | "kids";
  content: {
    _type: "block";
    children: {
      _type: "span";
      text: string;
    }[];
    markDefs?: unknown[];
    style: string;
  }[];
};
