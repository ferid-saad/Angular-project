import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { error } from 'console';
import { resolve } from 'dns';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

createNewUser(email:string, password:string){
return new Promise( 
  (resolve, reject) =>{
firebase.auth().createUserWithEmailAndPassword(email,password).then(
  () => (
    resolve(true)
  ),
  (error) => {
    reject(error)
  }
)

  }

) 

}
signInUser(email:string, password:string){

  return new Promise( 
    (resolve, reject) =>{
  firebase.auth().signInWithEmailAndPassword(email,password).then(
    () => (
      resolve(true)
    ),
    (error) => {
      reject(error)
    }
  )
  
    }
  
  ) 
  
    }
forgetPassword(){}
signoutUser(){
  firebase.auth().signOut();
}


}
