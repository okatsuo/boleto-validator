import { BancarioCalculateDate } from '../../../src/operations/boleto-bancario'

type SutType = {
  sut: BancarioCalculateDate
}

const makeSut = (): SutType => {
  const sut = new BancarioCalculateDate()
  return { sut }
}

describe('Calculate date', () => {
  it('should return with correct date', () => {
    const { sut } = makeSut()
    expect(sut.calculate('8861')).toBe('2022-01-10')
  })
})
