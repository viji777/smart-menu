import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  generateMenu(text: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // ✅ FORCE JSON
    return this.http.post(`${this.API_URL}/generate-menu`, { text }, { headers });
  }

  saveMenu(item: any) {
  return this.http.post('http://localhost:3000/menu', item);
}

getMenus() {
  return this.http.get('http://localhost:3000/menu');
}

}
