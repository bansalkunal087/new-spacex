import { LoaderService } from './services/loader.service';
import { Component } from '@angular/core';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'space-new';
  public subscription;
  public showLoader = false;

  constructor(private loaderService: LoaderService){

  }

  ngOnInit(){

  }

  ngAfterViewInit(){
    this.subscription = this.loaderService.loaderSubject.pipe(delay(0))
    .subscribe((value: any) => {
      this.showLoader = value.show;
    });
  }

  ngOnDestory(){
    this.subscription.unsubscribe();
  }
}
