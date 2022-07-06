import { FacebookApi } from '@/infra/apis'
import { AxiosHttpClient } from '@/infra/http'
import { env } from '@/main/config/env'

describe('Facebook API Integration Tests', () => {
  it('should return a Facebook User if token is valid', async () => {
    const axiosClient = new AxiosHttpClient()
    const sut = new FacebookApi(
      axiosClient,
      env.facebookApi.clientId,
      env.facebookApi.clientSecret
    )
    const fbUser = await sut.loadUser({ token: 'EAAH9e4d4PvoBAAPh2RrxHXWZCerErmn6VS4ygjCHN5aTO3ZCqj6OM4YR6aPXgAYmnsibt3QgzFcMAvTe9beD6QDZB9gEAc1KxMenIZAvMAtIDDfdx3BQBkXx5WZCQZCZALER5nWTKHXk28P7R8RtxBOhAix3LRrKtYsiJGsbNznA14eGj6HEn7TgHHqBBKaeAOkRMUZAJwmuUgZDZD' })
    expect(fbUser).toEqual({
      facebookId: '100992339353000',
      email: 'alan_tjovzge_teste@tfbnw.net',
      name: 'Alan Teste'
    })
  })

  it('should return undefined if token is invalid', async () => {
    const axiosClient = new AxiosHttpClient()
    const sut = new FacebookApi(
      axiosClient,
      env.facebookApi.clientId,
      env.facebookApi.clientSecret
    )
    const fbUser = await sut.loadUser({ token: 'invalid_token' })
    expect(fbUser).toBeUndefined()
  })
})
