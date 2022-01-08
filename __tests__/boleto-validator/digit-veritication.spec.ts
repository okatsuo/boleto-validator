import { DigitVerification } from '../../src/operations/boleto-validator/digit-verification'
import { IModule10, Module10 } from '../../src/operations/boleto-validator/module10'

type SutType = {
  Module10Stub: IModule10
  sut: DigitVerification
}

const makeSut = (): SutType => {
  const Module10Stub = new Module10()
  const sut = new DigitVerification(Module10Stub)

  return {
    Module10Stub,
    sut
  }
}

describe('Digit verification', () => {
  it('should return false if is invalid', () => {
    const { sut } = makeSut()

    expect(sut.validate('03399340848500000011842498201013388610000065930')).toBe(false)
  })

  it('should return true if is valid string', () => {
    const { sut } = makeSut()

    expect(sut.validate('03399340858500000011842498201013388610000065930')).toBe(true)
  })
})
