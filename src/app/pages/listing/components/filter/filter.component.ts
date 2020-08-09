import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  public filters = new Map();
  @Input()
  get selectedFilters() { return this._selectedFilters; }
  set selectedFilters(value) {
    try{
      this._selectedFilters = JSON.parse(JSON.stringify(value));
    }
    catch(e){
      this._selectedFilters = {};
    }
  }
  private _selectedFilters = {};
  @Output() filterSelected = new EventEmitter<any>();
  
  constructor() {}

  ngOnInit(): void {
    this.createFilters();
  }
 

  createFilters() {
   
    let startYear = 2006;
    let years= []
    for (let i = 0; i < 14; i++) {
      years.push(startYear + i);
    }

    this.filters.set('year', {
      name: 'Launch Year',
      options: years
    });

    this.filters.set('launch', {
      name: 'Successful Launch',
      options: ['true', 'false']
    });
    this.filters.set('landing', {
      name: 'Successful Landing',
      options: ['true', 'false']
    });
    
  }

  selectFilter(key, value) {
   

    this.filterSelected.emit({[key]: value});
    
  }

  keyDescOrder = (a, b): number => {
    return a.key > b.key ? -1 : (b.key > a.key ? 1 : 0);
  }
}
