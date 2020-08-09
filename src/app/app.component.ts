import { LoaderService } from './services/loader.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'space-new';
  public subscription;
  public showLoader = true;

  constructor(private loaderService: LoaderService){}

  ngOnInit(){

  }

  ngAfterViewInit(){
    this.subscription = this.loaderService.loaderSubject
    .subscribe((value: any) => {
      this.showLoader = value.show;
    });
  }

  ngOnDestory(){
    this.subscription.unsubscribe();
  }
}
