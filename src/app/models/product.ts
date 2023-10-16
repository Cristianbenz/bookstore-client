export interface Product {
    id: number;
    title: string;
    cover: string;
    authors: Array<string>;
    summary: string;
    price: number;
    stock: number;
}