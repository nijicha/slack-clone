interface User {
  email: string
}

interface EncryptedUserData {
  password: string
  passwordConfirmation: string
}

export interface IUser extends User, EncryptedUserData {}
