import { BoletoValidator } from '../src/boleto-validator'

describe('Boleto validator', () => {
  it('should ', () => {
    const boletoValidator = new BoletoValidator()
    expect(boletoValidator.validate('invalid_digitable_line')).toBe(false)
    expect(boletoValidator.validate('48.273.8495018.182462')).toBe(false)
    expect(boletoValidator.validate('48273849501818246A')).toBe(false)
    expect(boletoValidator.validate('48,273,8495018,182462')).toBe(false)
    expect(boletoValidator.validate('48-273-8495018-182462')).toBe(false)
  })
})
