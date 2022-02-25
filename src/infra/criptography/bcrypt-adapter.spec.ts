import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return await new Promise(resolve => resolve('hash'))
  }
}))
const salt = 12
const makeSut = (): BcryptAdapter => {
  return new BcryptAdapter(salt)
}

describe('Bcrypt Adapter', () => {
  test('Should Call Bcrypter if correct values', async () => {
    const sut = makeSut()
    const hashPsy = jest.spyOn(bcrypt, 'hash')
    await sut.encrypt('any_value')
    expect(hashPsy).toHaveBeenCalledWith('any_value', salt)
  })

  test('Should Bcrypter return a hash', async () => {
    const sut = makeSut()
    const hash = await sut.encrypt('any_value')
    expect(hash).toBe('hash')
  })

  test('Should Bcrypter return a hash', async () => {
    const sut = makeSut()
    const hash = await sut.encrypt('any_value')
    expect(hash).toBe('hash')
  })
})
