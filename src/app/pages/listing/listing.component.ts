import { LoaderService } from './../../services/loader.service';
import { ListingService } from './listing.service';
import { Component, OnInit, EventEmitter, Output, PLATFORM_ID, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  public isBrowser: boolean;
  public programsLoading: boolean = false;
  public selectedFilters = {};
  public launchPrograms: any = [];

  constructor(private listingService: ListingService, private router: Router,
    private route: ActivatedRoute, @Inject(PLATFORM_ID) private platform: Object,
    private loaderService: LoaderService) { 
      this.isBrowser = isPlatformBrowser(platform);
  
  }

  ngOnInit(): void {
    if(this.isBrowser){
      this.getQueryParams();
    }
  }

  getQueryParams() {
    
      var queryParams = this.route.snapshot.queryParams;
      
      for (var param in queryParams) {
        this.selectedFilters[param] = queryParams[param];
      }
      
      this.getLaunchPrograms(this.selectedFilters);
 
  }


  onfilterSelected(filter){

    let previousFilters = {...this.selectedFilters};
    this.selectedFilters = {...this.selectedFilters,...filter};

    if(this.shallowEqual(previousFilters,this.selectedFilters)){
      return false;
    }

    var params = {...this.selectedFilters };
    this.router.navigate(['/listing'],
      {
        queryParams: params
      }
    );
    
    this.getLaunchPrograms(this.selectedFilters);
    
  }
  
  getLaunchPrograms(params={}){

    this.programsLoading = true;
    var paramsStr = '';
    
    if(params['landing']){
      paramsStr+=`&land_success=${params['landing']}`;
    }
    if(params['launch']){
      paramsStr+=`&launch_success=${params['launch']}`;
    }
    if(params['year']){
      paramsStr+=`&launch_year=${params['year']}`;
    }
    
    this.loaderService.show();
    
    this.listingService.getPrograms(paramsStr).subscribe(data => {
      this.programsLoading = false;
      
      if(data){
        this.launchPrograms = Array.isArray(data) ? data : [];
      }

      this.loaderService.hide();

    });
  }

  shallowEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  
    return true;
  }
}
