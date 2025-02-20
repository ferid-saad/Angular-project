import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FinalProject2';
  constructor (){
    var firebaseConfig = {
      apiKey: "AIzaSyAlV0kCVv7BCy8jvml3SGy-NMfd84jB_wM",
      authDomain: "angular-project-fa8e2.firebaseapp.com",
      projectId: "angular-project-fa8e2",
      storageBucket: "angular-project-fa8e2.firebasestorage.app",
      messagingSenderId: "1006329832550",
      appId: "1:1006329832550:web:fe7200351b3691fb3539a7"

    };
firebase.initializeApp(firebaseConfig);
  }
}
