import { Component, OnInit, Input, PLATFORM_ID, Inject } from '@angular/core';
import { ILaunchProgram } from './listing-cards.interface';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-listing-cards',
  templateUrl: './listing-cards.component.html',
  styleUrls: ['./listing-cards.component.scss']
})
export class ListingCardsComponent implements OnInit {

  @Input()
  get launchPrograms(): Array<ILaunchProgram> { return this._launchPrograms; }
  set launchPrograms(value: Array<ILaunchProgram>) {
    // console.log(value);
    try{
      this._launchPrograms = JSON.parse(JSON.stringify(value));
    }
    catch(e){
      this._launchPrograms = [];
    }
  }
  private _launchPrograms = [];

  @Input()
  get isLoading(): boolean { return this._isLoading; }
  set isLoading(value: boolean) {
    // console.log(value);
    try{
      this._isLoading = value;
    }
    catch(e){
      this._isLoading = false;
    }
  }

  private _isLoading = false;
  public numberOfNotLazyLoadImages = 2;
  public isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platform: Object) { 
    this.isBrowser = isPlatformBrowser(platform);
  }

  ngOnInit(): void {

    if(this.isBrowser){
      if(window.innerWidth > 700){
        this.numberOfNotLazyLoadImages = 9;
      }
    }
    
    // console.log("init",this.launchPrograms)
  }

}
