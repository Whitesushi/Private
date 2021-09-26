import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoadoutService {

  constructor(
    private db: AngularFirestore,
  ) { }

  create(data) {
    return this.db.collection('loadouts').add(data);
  }

  get() {
    return this.db.collection('loadouts').snapshotChanges();
  }

  getOne(id) {
    return this.db.collection('loadouts').doc(id).valueChanges();
  }

  update(id, data) {
    return this.db.collection('loadouts').doc(id).update(data);
  }

  delete(data) {
    return this.db.collection('loadouts').doc(data.id).delete();
  }
}
