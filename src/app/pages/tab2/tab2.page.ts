import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Article } from 'src/app/interfaces/index';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  constructor(private newsService: NewsService) {}

  public articles: Article[] = [];
  
  ngOnInit(){
    this.newsService.getTopHeadLinesBussiness().subscribe(articles=> this.articles.push(...articles));
  }

}
