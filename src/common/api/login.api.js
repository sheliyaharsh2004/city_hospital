import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";

export const LoginApi = (data) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then((user) => {
      console.log(user);
    }).catch((e) => {
      console.log(e);
    })
  })
}

export const SignupApi = (data) => {
  console.log(data);
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);

      onAuthStateChanged(auth, (user) => {
        if (user) {
          sendEmailVerification(user);
          const uid = user.uid;
        } else {
          
        }
      });
    })
    .then((emailVerified) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          if(user.emailVerified) {
            resolve({payload : "Email Successfully!"});
          } else {
            resolve({payload : "plese verify your Email"});
          }
        } else {
          reject({payload : "somthing wront wronge."});
        }
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      if(errorCode.localeCompare("auth/email-already-in-use") === 0){
        reject({payload : "email already registered."});
      } else{
        reject({payload : errorCode});
      }
    });
  });
}