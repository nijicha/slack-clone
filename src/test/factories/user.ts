import * as faker from 'faker'

import { IUser } from '../../app/types/models/user'

export const fakerUser = (): IUser => {
  return {
    email: faker.internet.exampleEmail(),
    password: faker.internet.password(6),
    passwordConfirmation: faker.internet.password(6),
  }
}
