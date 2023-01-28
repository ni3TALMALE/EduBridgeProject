import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinalprojectService {

  constructor(private http:HttpClient) { }
  
}
