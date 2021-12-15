import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiseaseComponent } from './disease/disease.component';
import { SymptomsComponent } from './symptoms/symptoms.component';

const routes: Routes = [
  {
    path: 'symptoms',
    component: SymptomsComponent,
  },
  {
    path: 'diseases',
    component: DiseaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
