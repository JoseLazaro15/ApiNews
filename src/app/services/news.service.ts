import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Article,NewsResponse } from '../interfaces/index';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {}

  getTopHeadLinesTesla():Observable<Article[]>{
    return this.http.get<NewsResponse>(`https://newsapi.org/v2/everything?q=tesla&from=2024-01-10&sortBy=publishedAt&apiKey=f65e542ae67c41acbb4ae389aeebe03c`).pipe(
    map(({articles})=> articles));
  }

  getTopHeadLinesBussiness():Observable<Article[]>{
    return this.http.get<NewsResponse>(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f65e542ae67c41acbb4ae389aeebe03c`).pipe(
    map(({articles})=> articles));
  }

  getTopHeadLinesWallStreet():Observable<Article[]>{
    return this.http.get<NewsResponse>(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=f65e542ae67c41acbb4ae389aeebe03c`).pipe(
    map(({articles})=> articles));
  }

}
