import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftsidebarComponent } from './leftsidebar.component';

describe('LeftsidebarComponent', () => {
  let component: LeftsidebarComponent;
  let fixture: ComponentFixture<LeftsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftsidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
