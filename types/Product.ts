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

export type CartItemType = {
  _id: string;
  _type: string;
  name: string;
  price: number;
  category: string;
  sizes: {
    quantity: number;
    size: string;
    _key: string;
  }[];
  size: string;
  quantity: number;
  images: {
    _key: string;
    image: {
      _type: string;
      alt: string;
      asset: {
        _ref: string;
        _type: string;
      };
    };
  }[];
  content: {
    markDefs: any[];
    children: {
      marks: any[];
      text: string;
      _key: string;
      _type: string;
    }[];
    _type: string;
    style: string;
    _key: string;
  }[];
};
