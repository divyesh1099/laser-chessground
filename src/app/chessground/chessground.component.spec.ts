import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessgroundComponent } from './chessground.component';

describe('ChessgroundComponent', () => {
  let component: ChessgroundComponent;
  let fixture: ComponentFixture<ChessgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChessgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChessgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
