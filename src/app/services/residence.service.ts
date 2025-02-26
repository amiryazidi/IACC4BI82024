import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Residence } from '../models/residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  constructor(private http: HttpClient) { }


  getResidences () {
    return this.http.get<Residence[]>('http://localhost:3000/residences')
  }

  getResidenceById(id:number){
    return this.http.get<Residence>('http://localhost:3000/residences/'+id)
  }

  addResidence(res:Residence){
    return this.http.post('http://localhost:3000/residences',res)
  }

  deleteRes(id:number){
   return this.http.delete('http://localhost:3000/residences/'+id)
  }

}
