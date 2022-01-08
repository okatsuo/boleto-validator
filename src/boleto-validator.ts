type IBoletoValidator = {
  validate: (digitableLine: string) => boolean
}

export class BoletoValidator implements IBoletoValidator {
  validate (digitableLine: string): boolean {
    const isValid = digitableLine.match(/^[0-9]+$/)
    if (!isValid) return false
    return true
  }
}
