type IBoletoValidator = {
  validate: (digitableLine: string) => boolean
}

export class BoletoValidator implements IBoletoValidator {
  bank_title_length = 44
  validate (digitableLine: string): boolean {
    const isValid = digitableLine.match(/^[0-9]+$/)
    if (!isValid || digitableLine.length !== this.bank_title_length) return false

    return true
  }
}
