export interface Product {
    id: number;
    category: string;
    image: string;
  }

  export interface ProductData extends Product {
    title: string;
    price: number;
    description: string;
    rating: {
      rate: number;
      count: number;
    };
  }