import { Component,OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Article } from 'src/app/interfaces/index';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  constructor(private newsService: NewsService) {}
  
  public articles: Article[] = [];

  ngOnInit(){
    this.newsService.getTopHeadLinesWallStreet().subscribe(articles=> this.articles.push(...articles));
  }

}
