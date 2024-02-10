import { Component,OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Article } from 'src/app/interfaces/index';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit{

  constructor(private newsService: NewsService) {}

  public articles: Article[] = [];
  
  ngOnInit(){
    this.newsService.getTopHeadLinesTesla().subscribe(articles=> this.articles.push(...articles));
  }
}
