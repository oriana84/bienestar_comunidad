import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConfirmarModalComponent } from './confirmar-modal.component';

describe('ConfirmarModalComponent', () => {
  let component: ConfirmarModalComponent;
  let fixture: ComponentFixture<ConfirmarModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ConfirmarModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
