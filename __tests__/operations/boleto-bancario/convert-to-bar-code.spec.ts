import { BancarioConvertToBarCode } from '../../../src/operations/boleto-bancario'

type SutType = {
  sut: BancarioConvertToBarCode
}

const makeSut = (): SutType => {
  const sut = new BancarioConvertToBarCode()
  return { sut }
}

describe('Convert to bar code', () => {
  it('should return a string', () => {
    const { sut } = makeSut()
    const barCode = sut.convert('03399340858500000011842498201013388610000065930')
    expect(barCode).toEqual(expect.any(String))
  })

  it('should return with correct bar code', () => {
    const { sut } = makeSut()
    const barCode = sut.convert('03399340858500000011842498201013388610000065930')
    expect(barCode).toBe('03393886100000659309340885000000114249820101')
  })
})
