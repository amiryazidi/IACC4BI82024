import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-prod',
  templateUrl: './detail-prod.component.html',
  styleUrls: ['./detail-prod.component.css']
})
export class DetailProdComponent {

  id!:number

  constructor(private act : ActivatedRoute){}


  ngOnInit(){
    this.id = this.act.snapshot.params['id']   // on recuperer l'id depuis l'url
  }

}
