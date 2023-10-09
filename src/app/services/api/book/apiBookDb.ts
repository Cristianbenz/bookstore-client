import { Injectable } from "@angular/core";
import { IApiBookDao } from "./models/apiBookDao";

@Injectable()
export class ApiBookDb implements IApiBookDao {

    getAll(): string {
        return 'a'
    }
    
}