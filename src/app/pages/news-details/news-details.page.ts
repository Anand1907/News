import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utils } from './../../utils/utils';
 
@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.page.html',
  styleUrls: ['./news-details.page.scss'],
})
export class NewsDetailsPage implements OnInit {
  news: any;
  constructor(private route: ActivatedRoute, private router: Router, private utils: Utils) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.news = this.router.getCurrentNavigation().extras.state.news;
        console.log(this.news);
      }
    });
   }

  ngOnInit() {
  }

}
