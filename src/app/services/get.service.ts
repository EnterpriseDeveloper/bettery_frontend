import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class GetService {
  constructor(private http: HttpClient) {}

  url = environment.apiUrl;

  get(path: string) {
    return this.http.get(`${this.url}/${path}`);
  }
}
