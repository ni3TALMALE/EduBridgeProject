import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


export interface User{
  tid?: number
  username?: string
  email?: string
  password?: string
}


@Injectable({
  providedIn: 'root'
})
export class AngularServiceService {

  constructor(private http:HttpClient) { }
  url1="http://localhost:9091/insert"
  url2="http://localhost:9091/update"
  url3="http://localhost:9091/valid"
  url4="http://localhost:9091/delete"
  url5="http://localhost:9091/view"
  url6="http://localhost:9091/ticketview"
  url7="http://localhost:9091/ticketinsert"
  url8="http://localhost:9091/deleteticket"
  url9="http://localhost:9091/updateTicket"
  url10="http://localhost:9091/getid"
  url11="http://localhost:9091/getticketid"
  url12="http://localhost:9091/getsingleid"

  getiduser(data:any){
    
    return this.http.post(this.url12, data)
  }

  getid(){
    return this.http.get(this.url10);
  }
  getticketid(){
    return this.http.get(this.url11);
  }
  
  ticketService(data:any){
    return this.http.post(this.url7, data)
  }
  insertService(data:any){
    return this.http.post(this.url1, data)
  }
  updateService(data:any){
   
    return this.http.post(this.url2, data)
  }
  getLogin(data:any){
    
    return this.http.post(this.url3, data)
  }
  deleteAccount(data:any){
    
    return this.http.post(this.url4, data)
  }
  viewUser(){
    return this.http.get(this.url5)
  }
  get loginAuth(){
    return true
  }
  getuser(data:any):Observable<any>{
    return this.http.post<any>(this.url3, data)
  }
  viewTicket(){
    return this.http.get(this.url6)
  }
  deleteTicket(data:any){
    
    return this.http.post(this.url8, data)
  }
  updateTicketService(data:any){
   
    return this.http.post(this.url9, data)
  }

  url14="http://localhost:9091/getRecordById"
  viewBooking(data:any){

    return this.http.post(this.url14,data)
  }
  
  url15="http://localhost:9091/getRecordById1"
  viewProfile(data:any){

    return this.http.post(this.url15,data)
  }
   
  }
  


