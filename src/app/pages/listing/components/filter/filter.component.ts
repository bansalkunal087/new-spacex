import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  public filters = {};
  @Input()
  get selectedFilters() { return this._selectedFilters; }
  set selectedFilters(value) {
    console.log(value);
    try{
      this._selectedFilters = JSON.parse(JSON.stringify(value));
    }
    catch(e){
      this._selectedFilters = {};
    }
  }
  private _selectedFilters = {};
  @Output() filterSelected = new EventEmitter<any>();
  
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.createFilters();
  }

 

  createFilters() {
    this.filters['year'] = {
      name: 'Launch Year',
      options: []
    };
    let startYear = 2006;

    for (let i = 0; i < 14; i++) {
      this.filters['year']['options'].push(startYear + i);
    }

    this.filters['launch'] = {
      name: 'Successful Launch',
      options: ['true', 'false']
    };
    this.filters['landing'] = {
      name: 'Successful Landing',
      options: ['true', 'false']
    };
  }

  selectFilter(key, value) {
   

    this.filterSelected.emit({[key]: value});
    
  }
}
