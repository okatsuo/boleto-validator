import { BoletoValidator } from '../src/boleto-validator'
import { iCalculateDigitableLineDate } from '../src/calculate-digitable-line-date'

class CalculateDigitableLineDateStub implements iCalculateDigitableLineDate {
  calculate (value: string): string {
    return 'valid_date'
  }
}

describe('Boleto validator', () => {
  it('should return false if digitableLine isnt only numbers', () => {
    const boletoValidator = new BoletoValidator(new CalculateDigitableLineDateStub())
    expect(boletoValidator.validate('invalid_digitable_line')).toBe(false)
    expect(boletoValidator.validate('A3399340858500000011842498201013388610000065930')).toBe(false)
    expect(boletoValidator.validate('0339934085850000001184249820101338861000006593A')).toBe(false)
    expect(boletoValidator.validate('03399.34085850000001.18424982010133.8861000006.5930')).toBe(false)
    expect(boletoValidator.validate('03399-340858500000011-842498201013388610000065-930')).toBe(false)
  })

  it('should return false if digitableLine isnt exactly 47 caracteres long', () => {
    const boletoValidator = new BoletoValidator(new CalculateDigitableLineDateStub())
    expect(boletoValidator.validate('212900011921100012109044756174059758700000021')).toBe(false)
    expect(boletoValidator.validate('033993408585000000118424982010133886100000659301')).toBe(false)
  })
})
