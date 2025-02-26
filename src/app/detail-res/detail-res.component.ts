import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResidenceService } from '../services/residence.service';
import { Residence } from '../models/residence';

@Component({
  selector: 'app-detail-res',
  templateUrl: './detail-res.component.html',
  styleUrls: ['./detail-res.component.css']
})
export class DetailResComponent {
    id!:number
    residence!:Residence
    constructor(private act:ActivatedRoute, private rs:ResidenceService){}


    ngOnInit(){
      this.id= this.act.snapshot.params['id']   //recuperer id depuis l'url
      this.rs.getResidenceById(this.id).subscribe(
        (date)=> this.residence=date   //  recupere la residence par id

      )


    }
}
