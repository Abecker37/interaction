import { Injectable } from '@angular/core';
import { Kitten } from '../model/kitten.model';
import { KITTENS } from '../kitten-mock';

@Injectable({
  providedIn: 'root'
})
export class KittenService {
  private kittens: Kitten[] = KITTENS;
  private adoptedKittens: Kitten[] = [];

  constructor() { }

  getKittens(): Kitten[] {
    return this.kittens;
  }

  addKitten(kitten: Kitten): void {
    this.kittens.push(kitten);
  }

  adoptKitten(kitten: Kitten): void {
    const index = this.kittens.indexOf(kitten);
    if (index !== -1) {
      this.kittens.splice(index, 1);
      kitten.adopted = true;
    }
    
  }
  getAdoptedKittens(): Kitten[] {
    return this.adoptedKittens;
  }
}