import { Component } from '@angular/core';

export interface Butor {
  cikkszam: string;
  megnevezes: string;
  ar: number;
  db: number;
}

@Component({
  selector: 'app-butorok',
  templateUrl: './butorok.component.html',
  styleUrls: ['./butorok.component.css']
})
export class ButorokComponent {
  cikkszam: string = "";
  megnevezes: string = "";
  ar: number = 0;
  db: number = 0;

  butorok: Butor[] = [];

  // A felvitel függvény frissítése
  felvitel(): void {
    // Új butor objektumot hozunk létre az aktuális mezőértékek alapján
    const ujButor: Butor = {
      cikkszam: this.cikkszam,
      megnevezes: this.megnevezes,
      ar: this.ar,
      db: this.db
    };

    // Hozzáadjuk a butorok tömbhöz
    this.butorok.push(ujButor);

    // Űrlap mezők alaphelyzetbe állítása
    this.cikkszam = "";
    this.megnevezes = "";
    this.ar = 0;
    this.db = 0;
  }
}


