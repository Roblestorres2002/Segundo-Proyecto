import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUser(credential: any) {
    return new Promise((accept, reject) => {
      if (
        
        (credential.email === 'andresjesusrobles@gmail.com' && credential.password === 'andres2002')
      ) {
        accept('Login correcto');
      } else if (credential.email === 'andresjesusrobles@gmail.com' || credential.email === 'andresjesusrobles@gmail.com') {
        reject('Contraseña incorrecta');
      } else {
        reject('Login incorrecto');
      }
    });
  }
}


