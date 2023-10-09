import { Injectable } from "@angular/core";
import { IApiBookService } from "./models/apiBookService";
import { IApiBookDao } from "./models/apiBookDao";
import { ApiBookDb } from "./apiBookDb";
import { Observable } from "rxjs";
import { Product } from "src/app/models/product";

@Injectable()
export class ApiBookService implements IApiBookService {
    private _db!: IApiBookDao;

    constructor(
        private _dao: ApiBookDb
    ){
        this._db = this._dao;
    }
    getById(id: string): Observable<Product | undefined> {
        throw new Error("Method not implemented.");
    }
    getAll(): Observable<Product[] | undefined> {
        throw new Error("Method not implemented.");
    }
}