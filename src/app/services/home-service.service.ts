import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Importa HttpHeaders

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  private apiUrl = 'https://api.thecatapi.com/v1/breeds'; 

  constructor(private http: HttpClient) { }

  getCats() {
    const apiKey = 'bda53789-d59e-46cd-9bc4-2936630fde39';
    const headers = new HttpHeaders({
      'x-api-key': apiKey
    });
    return this.http.get(this.apiUrl, { headers });
  }
}
