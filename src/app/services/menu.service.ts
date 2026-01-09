import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Generate AI Menu
  generateMenu(text: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.API_URL}/generate-menu`, { text }, { headers });
  }

  // Save menu
  saveMenu(item: any) {
    return this.http.post(`${this.API_URL}/menu`, item);
  }

  // Get all menus
  getMenus() {
    return this.http.get(`${this.API_URL}/menu`);
  }
}
