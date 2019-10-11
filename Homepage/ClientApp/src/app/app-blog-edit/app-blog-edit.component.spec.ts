import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBlogEditComponent } from './app-blog-edit.component';

describe('AppBlogEditComponent', () => {
  let component: AppBlogEditComponent;
  let fixture: ComponentFixture<AppBlogEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBlogEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBlogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
