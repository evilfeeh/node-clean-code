import request from 'supertest'
import app from '../config/app'

describe('SingUp Routes', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Felipe Santos',
        email: 'felipe.santos@mail.com',
        password: '123456',
        passwordConfirmation: '123456'
      })
      .expect(200)
  })
})
