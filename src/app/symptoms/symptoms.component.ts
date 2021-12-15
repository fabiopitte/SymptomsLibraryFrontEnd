import { Component, OnInit } from '@angular/core';
import { ISymptom } from '../models/ISymptom';
import { SymptomsService } from '../services/symptoms.service';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.scss'],
})
export class SymptomsComponent implements OnInit {
  constructor(private symptomsService: SymptomsService) {}

  symptoms: ISymptom[] = [];
  symptom: ISymptom = { name: '' };

  ngOnInit(): void {
    this.getSymptoms();
  }

  getSymptoms() {
    this.symptomsService.getSymptoms().subscribe({
      next: (response) => {
        this.symptoms = response;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  registerSymptom() {
    const payload: ISymptom = {
      name: this.symptom.name,
    };

    this.symptomsService.registerSymptom(payload).subscribe({
      next: (response) => {
        this.symptoms.push(response);
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => (this.symptom.name = ''),
    });
  }
}
