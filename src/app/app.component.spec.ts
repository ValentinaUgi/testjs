import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  let context;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(AppComponent);
    context = fixture.debugElement.componentInstance;
  }));

  it('should create the app',() => {

    expect(context).toBeTruthy();
  });

  it(`should have as title 'Cat'`, async(() => {

    expect(context.title).toEqual('Cat');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Cat!');
  }));

  it(`should call changeTitle`, () => {

    context.changeTitle();

    expect(context.title).toEqual('Bublic');
  });
});
