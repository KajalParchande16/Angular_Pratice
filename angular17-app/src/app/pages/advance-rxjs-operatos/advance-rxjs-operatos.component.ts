import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, debounceTime, filter, fromEvent, map, Observable, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax'
import { ControllerService } from '../../core/services/controller/controller.service';

@Component({
  selector: 'app-advance-rxjs-operatos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './advance-rxjs-operatos.component.html',
  styleUrl: './advance-rxjs-operatos.component.css'
})
export class AdvanceRxjsOperatosComponent implements OnInit, AfterViewInit ,OnDestroy {

  @ViewChild('search', { static: true }) inptText!: ElementRef<HTMLInputElement>;
  products: any[] = [];
  sub$ = new Subject();
  behSub$=new BehaviorSubject(0);
  cs=inject(ControllerService);
  private destroy$ = new Subject<void>();
  ngOnInit(): void {

    const obs = new Observable((val) => {
      val.next("1");
      val.next(2);
      val.next(3);
    });
    obs.subscribe((res) => {
      console.log(res);
    });

    this.sub$.next(4);

    this.sub$.subscribe((res) => {
      console.log("Sub", res)
    });
    this.sub$.next(20);

    this.behSub$.subscribe((val)=>{
      console.log("Behaviour Sub",val)
    });
    this.behSub$.next(18);
    // check without destroy
    //   this.cs.behSub$.subscribe((val)=>{
    //     // we get continous value in sub-beh compoent
    //   console.log("value from service to another compo",val);
    // })
    // with destroy we setvale from sub-beh-compoent so we don;t get value ahin there
    this.cs.behSub$.pipe(takeUntil(this.destroy$)).
    subscribe((val)=>{
      console.log("value from service to another compo",val);
    })

    // if we want to access nativeElement in ngOnInit need to add {static:true} property into ViewChild
    // const textVal = fromEvent(this.inptText.nativeElement, 'input').pipe(
    //   filter((val: any) => val.target.value != ''),//if input is empty then don't call api
    //   switchMap((e: any) => {
    //     return ajax(`https://dummyjson.com/products/search?q=${e.target.value}`)
    //     // return inputEvent.target.value
    //   }
    //   ),
    //   map((AjaxResponse: any) => AjaxResponse.response.products)

    // );
    // textVal.subscribe((res: any) => {
    //   console.log(res);
    //   this.products = res;
    // })


    // wrong way 
    //     const textVal = fromEvent(this.inptText.nativeElement, 'input');

    // textVal.subscribe((e: any) => {
    //   ajax(`https://dummyjson.com/products/search?q=${e.target.value}`)
    //     .subscribe(res => console.log(res));
    // });

  }
  ngAfterViewInit(): void {
    const textVal = fromEvent(this.inptText.nativeElement, 'input').pipe(
      debounceTime(400),
      filter((val: any) => val.target.value != ''),//if input is empty then don't call api
      switchMap((e: any) => {
        return ajax(`https://dummyjson.com/products/search?q=${e.target.value}`)
        // return inputEvent.target.value
      }
      ),
      map((AjaxResponse: any) => AjaxResponse.response.products)

    );
    textVal.subscribe((res: any) => {
      console.log(res);
      this.products = res;
    })
  }
  ngOnDestroy(): void {
    
    this.destroy$.next();
    this.destroy$.complete();
  }

}
