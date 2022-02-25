import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'

describe('Bcrypt Adapter', () => {
  test('Should Call Bcrypter if correct values', async () => {
    const salt = 12
    const sut = new BcryptAdapter(salt)
    const hashPsy = jest.spyOn(bcrypt, 'hash')
    await sut.encrypt('any_value')
    expect(hashPsy).toHaveBeenCalledWith('any_value', salt)
  })
})
