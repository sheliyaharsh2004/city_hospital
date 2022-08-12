import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../Firebase";

export const LoginApi = (data) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then((user) => {
      if(user.user.emailVerified){
        resolve({payload: user.user})
      } else{
        reject({payload: "please verifi Your Email"})
      }
    }).catch((e) => {
      if(e.code.localeCompare('auth/user-not-found') === 0){
        reject({payload: "please Email Registered"})
      } else if(e.code.localeCompare('auth/wrong-password') === 0){
        reject({payload:"weong email or password"})
      } else{
        reject({payload: e})
      }
    })
  })
}

export const SignupApi = (data) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      const user = userCredential.user;
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
          if(user.user.emailVerified) {
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

export const LoguotApi = () => {
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then((user) => {
        resolve({payload: "Logout Successfully"})
      })
      .catch((e) => {
        reject({payload: "Something Went Wrong"})
      })
  })
}