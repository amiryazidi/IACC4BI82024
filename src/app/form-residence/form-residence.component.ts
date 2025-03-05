import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from '../services/residence.service';
import { Residence } from '../models/residence';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css']
})
export class FormResidenceComponent {

  residenceForm: FormGroup;
  id!:number
  residence!:Residence
  constructor(private rs:ResidenceService, private route:Router,private act:ActivatedRoute) {
    // Initialisation du formulaire avec FormGroup et FormControl
    this.residenceForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      address: new FormControl('', Validators.required),
      image: new FormControl('', [Validators.required]),
      status: new FormControl('../../assets/images/R3.jpg', Validators.required)
    });
  }


  ngOnInit(){
    // 1- Récupérer l'id de la résidence à partir de l'URL
    this.id=this.act.snapshot.params['id']
    //2 - recuperer la residence par son id
    this.rs.getResidenceById(this.id).subscribe(
      (data)=>   {
        this.residence=data,
            //3- remplir le formulaire avec les données de la residence
        this.residenceForm.patchValue(this.residence)
      }

    )
  }
  // Fonction appelée lors de la soumission du formulaire
  save() {

      if (this.id){
        this.rs.updateRes(this.residenceForm.value,this.id).subscribe(
          ()=>this.route.navigateByUrl('/residence')
        )
      } else
      {
        this.rs.addResidence(this.residenceForm.value).subscribe(
          ()=>this.route.navigateByUrl('/residence')
    )
      }


  }
}
