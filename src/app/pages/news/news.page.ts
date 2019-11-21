import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NEWS } from './../../service-constants';
import { NewsService } from './../../providers/news/news.service';
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { Utils } from './../../utils/utils';
import { CacheService } from 'ionic-cache';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  providers: [Utils]
})
export class NewsPage implements OnInit {
  newsList: Observable<any>;
  newsKey = 'news-group'
  constructor(private cache: CacheService, private utils: Utils, private newsService: NewsService, private router: Router) { }

  ngOnInit() {
  }

  ionViewDidEnter(refresher?) {
    this.loadNewsList();
  }

  loadNewsList(refresher?) {
    let newsReq = this.newsService.getNewsList()
      .pipe(
        map(res => {
          this.utils.showToast(this.utils.topHeadlinesFetched);
          return res.articles ? res.articles : [];
        })
      );

    if (refresher) {
      let delayType = "all";
      this.newsList = this.cache.loadFromDelayedObservable(NEWS.BASE_URL, newsReq, this.newsKey, 10, delayType);
      this.newsList.subscribe(data => {
        refresher.target.complete();
      });
    }
    else {
      this.newsList = this.cache.loadFromObservable(NEWS.BASE_URL, newsReq, this.newsKey);
    }
  }

  openDetailsWithState(news) {
    let navigationExtras: NavigationExtras = {
      state: {
        news: news
      }
    };
    this.router.navigate(['news-details'], navigationExtras);
  }

  forceReload(refresher) {
    this.loadNewsList(refresher);
  }

}
