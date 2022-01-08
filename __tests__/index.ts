import { BoletoValidator } from '../src/boleto-validator'

describe('Boleto validator', () => {
  it('should return false if digitableLine isnt only numbers', () => {
    const boletoValidator = new BoletoValidator()
    expect(boletoValidator.validate('invalid_digitable_line')).toBe(false)
    expect(boletoValidator.validate('A1290001192110001210904475617405975870000002')).toBe(false)
    expect(boletoValidator.validate('2129000119211000121090447561740597587000000A')).toBe(false)
    expect(boletoValidator.validate('2129.000119.211000121090.447561740.5975870.000002')).toBe(false)
    expect(boletoValidator.validate('21290-001192110-00121090447-5617405975870-000002')).toBe(false)
  })

  it('should return false if digitableLine isnt exactly 44 caracteres long', () => {
    const boletoValidator = new BoletoValidator()
    expect(boletoValidator.validate('212900011921100012109044756174059758700000021')).toBe(false)
    expect(boletoValidator.validate('2129000119211000121090447561740597587000000')).toBe(false)
  })
})
