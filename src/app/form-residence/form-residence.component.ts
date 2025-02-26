import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResidenceService } from '../services/residence.service';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css']
})
export class FormResidenceComponent {

  residenceForm: FormGroup;

  constructor(private rs:ResidenceService, private route:Router) {
    // Initialisation du formulaire avec FormGroup et FormControl
    this.residenceForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      address: new FormControl('', Validators.required),
      image: new FormControl('', [Validators.required]),
      status: new FormControl('', Validators.required)
    });
  }

  // Fonction appelée lors de la soumission du formulaire
  save() {
      this.rs.addResidence(this.residenceForm.value).subscribe(
            ()=>this.route.navigateByUrl('/residence')
      )
  }
}
