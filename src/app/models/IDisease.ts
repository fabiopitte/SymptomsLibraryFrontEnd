import { ISymptom } from './ISymptom';

export interface IDisease {
  id?: number;
  name: string;
  symptoms: ISymptom[];
}
