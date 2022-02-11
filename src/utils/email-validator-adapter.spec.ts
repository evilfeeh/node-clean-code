import { EmailValidatorAdapter } from './emailvalidatoradapter'

describe('emailValidator ', () => {
  test('Should return false if email is not valid', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBe(false)
  })
})
