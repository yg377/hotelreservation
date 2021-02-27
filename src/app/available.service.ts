import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AvailableService {

  constructor(private db: AngularFireDatabase) { }

create(available){
  return this.db.list('/categories').push(available);
}
getAll(){
return this.db.list('/categories').valueChanges();


}



}