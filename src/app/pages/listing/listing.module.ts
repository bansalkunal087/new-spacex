import { LazyLoadDirective } from './../../directives/lazy-load.directive';
import { ListingService } from './listing.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './components/filter/filter.component';
import { ListingRoutingModule } from './listing-routing.module';
import { ListingComponent } from './listing.component';
import { ListingCardsComponent } from './components/listing-cards/listing-cards.component';



@NgModule({
  declarations: [
    ListingComponent,
    FilterComponent,
    ListingCardsComponent,
    LazyLoadDirective
  ],
  imports: [
    CommonModule,
    ListingRoutingModule
  ],
  providers:[
    ListingService
  ]
})
export class ListingModule { }
