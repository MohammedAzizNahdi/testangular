import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  apiUrl = '/api/tags/';

  constructor(private http: HttpClient) { }

  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.apiUrl);
  }

  getTagById(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + id);
  }

  createTag(tag: Tag): Observable<any> {
    return this.http.post<any>(this.apiUrl, tag);
  }

  updateTag(id: number, tag: Tag): Observable<any> {
    return this.http.put<any>(this.apiUrl + id, tag);
  }

  deleteTag(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + id);
  }
}