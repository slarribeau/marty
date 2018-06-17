import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {DebugElement} from '@angular/core'
import { DateComponent } from './date.component';
import {DateUtilitiesService} from '../date-utilities.service'
import { MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms'
//import {
  //ActivatedRoute, ActivatedRouteStub, asyncData, click, newEvent
//} from '../../testing';
import { By }                 from '@angular/platform-browser';
import { FilterPipe} from '../filter.pipe';


describe('DateComponent', () => {
  let component: DateComponent;
  let fixture: ComponentFixture<DateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateComponent ],
      imports: [BrowserAnimationsModule, 
                MatInputModule, 
                MatFormFieldModule, 
                FormsModule, 
                MatDatepickerModule,
                MatNativeDateModule],
      providers: [DateUtilitiesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('query selector', () => {
    const hostElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('input')
    console.log("DOH")
    console.log(nameInput);
    console.log("DOH")
    console.log(nameInput.value)
    console.log("DOH")
    console.log(component.myDateObject)

    nameInput.value = 'Thur Jun 14 2018 12:55:44 GMT-0700 (Pacific Daylight Time';

    //nameInput.dispatchEvent(newEvent('input'));

    fixture.detectChanges();
    console.log("BOH")
    console.log(nameInput);
    console.log("BOH")
    console.log(nameInput.value)
    console.log("BOH")
    console.log(component.myDateObject)

  })

  it('Validate component is sending correctly constructed events', () => {
    //https://angular.io/guide/testing#triggereventhandler
    //See dashboard-hero-component.spec.ts
    //See dashboard/dashboard.component.spec.ts

    //We will want to trigger a 'dateChange' event
    //One test will simply send a pre defined date object
    //Another test will pick a date from the picker and makes sure that it is sent
  })
});

describe('DateComponent when tested directly', () => {

  let comp: DateComponent;
  let fixture: ComponentFixture<DateComponent>;
  let heroDe: DebugElement;
  let heroEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DateComponent, 
        FilterPipe],
      providers : [DateUtilitiesService],
      imports: [BrowserAnimationsModule, 
        MatInputModule, 
        MatFormFieldModule, 
        MatNativeDateModule, 
        //MatMomentDateModule,
        FormsModule, 
        MatDatepickerModule]
  })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateComponent);
    comp    = fixture.componentInstance;

    // find the hero's DebugElement and element
    heroDe  = fixture.debugElement.query(By.css('.myDatePicker'));
    heroEl = heroDe.nativeElement;

    // mock the hero supplied by the parent component
    //expectedHero = { id: 42, name: 'Test Name' };

    // simulate the parent setting the input property with that hero
    //comp.hero = expectedHero;

    // trigger initial data binding
    fixture.detectChanges();
  });

  it('should raise selected event when clicked (triggerEventHandler)', () => {
    let myDate : Date = new Date("January 1, 2019");
    heroDe.triggerEventHandler('dateChange', myDate);
    console.log("TRIGGER!!!")
    //expect(selectedHero).toBe(expectedHero);
  });
/*
    it('should raise selected event when clicked (element.click)', () => {
      let selectedHero: Hero;
      comp.selected.subscribe((hero: Hero) => selectedHero = hero);

      heroEl.click();
      expect(selectedHero).toBe(expectedHero);
    });

  it('should raise selected event when clicked (click helper)', () => {
    let selectedHero: Hero;
    comp.selected.subscribe(hero => selectedHero = hero);

    click(heroDe); // click helper with DebugElement
    click(heroEl); // click helper with native element

    expect(selectedHero).toBe(expectedHero);
  });
  */
});

