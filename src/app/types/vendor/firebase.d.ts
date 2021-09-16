import firebase from 'firebase'
import UserCredential = firebase.auth.UserCredential

// common
export interface FirebaseErrorResponse {
  a: undefined
  code: number
  message: string
}

// firebase/auth
export interface FirebaseAuthResponse {
  response?: UserCredential
  error?: FirebaseErrorResponse
}
