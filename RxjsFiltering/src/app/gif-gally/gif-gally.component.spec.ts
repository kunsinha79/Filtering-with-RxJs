import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifGallyComponent } from './gif-gally.component';

describe('GifGallyComponent', () => {
  let component: GifGallyComponent;
  let fixture: ComponentFixture<GifGallyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifGallyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifGallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
