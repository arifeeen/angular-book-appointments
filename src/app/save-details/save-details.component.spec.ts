import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveDetailsComponent } from './save-details.component';

describe('SaveDetailsComponent', () => {
  let component: SaveDetailsComponent;
  let fixture: ComponentFixture<SaveDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
