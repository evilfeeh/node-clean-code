import { DbAddAccount } from './db-add-account'

describe('DbAddAccount Usecases', () => {
  test('Should call correct encrypt to password', async () => {
    class EncrypterStub {
      async encrypt (string: string): Promise<string> {
        return await new Promise(resolve => resolve('hashed_password'))
      }
    }
    const encrypterStub = new EncrypterStub()
    const sut = new DbAddAccount(encrypterStub)
    const encrypterSpy = jest.spyOn(encrypterStub, 'encrypt')
    const AccountData = {
      name: 'valid_name',
      email: 'valid_email@mail.com',
      password: 'valid_password'
    }
    await sut.add(AccountData)
    expect(encrypterSpy).toHaveBeenCalledWith('valid_password')
  })
})
