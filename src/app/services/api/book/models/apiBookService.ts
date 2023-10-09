import { Observable } from "rxjs";
import { Product } from "src/app/models/product";

export interface IApiBookService {
    getById(id: string): Observable<Product | undefined>;

    getAll(): Observable<Array<Product> | undefined>;
}