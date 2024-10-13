import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewCompComponent } from './new-comp.component';

describe('NewCompComponent Unit Tests', () => {
  let component: NewCompComponent;
  let fixture: ComponentFixture<NewCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCompComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should successfully create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct content in the template', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(
      'new-comp works!'
    );
  });
});
