import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedeventComponent } from './detailedevent.component';

describe('DetailedeventComponent', () => {
  let component: DetailedeventComponent;
  let fixture: ComponentFixture<DetailedeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailedeventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailedeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
