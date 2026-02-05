import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class PostService {
  constructor(readonly http: HttpClient) {}

  url = environment.apiUrl;

  post(path: string, data: Object) {
    return this.http.post(`${this.url}/${path}`, data);
  }
}
