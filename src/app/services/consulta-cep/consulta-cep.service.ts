import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ConsultaCep } from "src/app/interfaces/ConsultaCep";

@Injectable({
  providedIn: "root",
})
export class ConsultaCepService {
  url_API = "https://viacep.com.br/ws/";
  constructor(private http: HttpClient) {}

  getConsultaCep(cep: string) {
    return this.http.get<ConsultaCep>(`${this.url_API}${cep}/json`);
  }
}
