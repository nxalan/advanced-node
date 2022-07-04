import { RequiredFieldError } from '@/application/helpers/errors'

class RequriedStringValidator {
  constructor (
    private readonly value: string,
    private readonly fieldName: string
  ) {}

  validate (): Error | undefined {
    return new RequiredFieldError('any_field')
  }
}

describe('RequiredStringValidator', () => {
  it('should return RequiredFieldError if value is empty', () => {
    const sut = new RequriedStringValidator('', 'any_field')
    const error = sut.validate()
    expect(error).toEqual(new RequiredFieldError('any_field'))
  })

  it('should return RequiredFieldError if value is null', () => {
    const sut = new RequriedStringValidator(null as any, 'any_field')
    const error = sut.validate()
    expect(error).toEqual(new RequiredFieldError('any_field'))
  })

  it('should return RequiredFieldError if value is undefined', () => {
    const sut = new RequriedStringValidator(undefined as any, 'any_field')
    const error = sut.validate()
    expect(error).toEqual(new RequiredFieldError('any_field'))
  })
})
