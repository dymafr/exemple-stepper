import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-exemple-component",
  templateUrl: "exemple.html",
  styleUrls: ["exemple.scss"]
})
export class ExempleComponent implements OnInit {
  premierFormulaire: FormGroup;
  secondFormulaire: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.premierFormulaire = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
    });
    this.secondFormulaire = this.fb.group({
      email: ['', Validators.email]
    });
  }

}
