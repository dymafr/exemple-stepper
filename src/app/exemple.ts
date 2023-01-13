import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exemple-component',
  templateUrl: 'exemple.html',
  styleUrls: ['exemple.scss'],
})
export class ExempleComponent {
  premierFormulaire = this.fb.group({
    prenom: ['', Validators.required],
    nom: ['', Validators.required],
  });
  secondFormulaire = this.fb.group({
    email: ['', Validators.email],
  });

  constructor(private fb: FormBuilder) {}
}
