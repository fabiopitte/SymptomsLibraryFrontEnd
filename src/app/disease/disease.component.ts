import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IDisease } from '../models/IDisease';
import { ISymptom } from '../models/ISymptom';
import { DiseasesService } from '../services/diseases.service';
import { SymptomsService } from '../services/symptoms.service';

@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.scss'],
})
export class DiseaseComponent implements OnInit {
  @ViewChild('modal', { read: ViewContainerRef, static: true }) modal: any;

  diseases: IDisease[] = [];
  disease: IDisease = { name: '', symptoms: [] };
  symptoms: ISymptom[] = [];

  constructor(
    private diseasesService: DiseasesService,
    private symptomsService: SymptomsService
  ) {}

  ngOnInit(): void {
    this.getDiseases();
  }

  getDiseases() {
    this.diseasesService.getIDiseases().subscribe({
      next: (response) => {
        this.diseases = response;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  openModal() {
    this.modal._lContainer[0].style.display = 'block';

    this.symptomsService.getSymptoms().subscribe({
      next: (response) => {
        this.symptoms = response;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  closeModal() {
    this.modal._lContainer[0].style.display = 'none';
  }

  addSymptom(item: any): void {
    if (item.target.checked) {
      const s = { id: item.target.id, name: item.target.value };
      this.disease.symptoms.push(s);
    } else {
      this.disease.symptoms = this.disease.symptoms.filter(
        (i) => i.name != item.target.value
      );
    }
  }

  registerDisease() {
    const payload: IDisease = {
      name: this.disease.name,
      symptoms: this.disease.symptoms,
    };

    this.diseasesService.registerDisease(payload).subscribe({
      next: (response) => {
        this.diseases.push(response);
        this.closeModal();
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => (this.disease.name = ''),
    });
  }
}
