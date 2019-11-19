import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NewsService } from './news.service';
import { Constants, NEWS } from './../../service-constants';

describe('NewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: NewsService = TestBed.get(NewsService);
    expect(service).toBeTruthy();
  });

  it("should call newsList which returns observable", inject(
    [NewsService, HttpTestingController],
    (newsService, httpMock) => {
     const articles = [{author: 'BBC', title : 'Headlines', description: 'New News'}];
     newsService.getNewsList().subscribe(data => {
       expect(data.articles).toEqual(articles);
    });
  }));
  
});
