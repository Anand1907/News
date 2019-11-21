import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { NewsDetailsPage } from './news-details.page';

describe('NewsDetailsPage', () => {
  let component: NewsDetailsPage;
  let fixture: ComponentFixture<NewsDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsDetailsPage ],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([]), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

});
