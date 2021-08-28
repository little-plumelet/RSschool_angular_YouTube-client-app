import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICustomCard } from '../models/custom-card';

@Injectable({
  providedIn: 'root',
})
export class CustomCardService {
  customCard$ = new BehaviorSubject({} as ICustomCard);

}
