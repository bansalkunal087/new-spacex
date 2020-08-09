import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()

export class ListingService {
  
  constructor (
    private http: HttpClient
  ) {}

  getPrograms(params) {
    let url = `https://api.spacexdata.com/v3/launches?limit=100${params}`;
    return this.http.get(url);
  }
}
