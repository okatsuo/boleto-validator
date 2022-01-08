type IBoletoValidator = {
  validate: (digitableLine: string) => boolean
}

export class BoletoValidator implements IBoletoValidator {
  bankTitleLength = 44
  validate (digitableLine: string): boolean {
    const isValid = digitableLine.match(/^[0-9]+$/)
    if (!isValid || digitableLine.length !== this.bankTitleLength) return false
    return true
  }
}
