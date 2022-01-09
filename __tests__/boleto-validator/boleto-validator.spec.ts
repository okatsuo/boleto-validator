import { ICalculateAmount } from '../../src/domain/useCases/calculate-amount'
import { ICalculateDate } from '../../src/domain/useCases/calculate-date'
import { IConvertToBarCode } from '../../src/domain/useCases/convert-to-bar-code'
import { IDigitVerification } from '../../src/domain/useCases/digit-verification'
import { BoletoValidator } from '../../src/operations/boleto-validator/boleto-validator'
import { badRequest, ok } from '../../src/service/helpers/http-errors'

const makeCalculateDateStub = (): ICalculateDate => {
  class CalculateDateStub implements ICalculateDate {
    calculate (value: string): string {
      return 'valid_date'
    }
  }

  return new CalculateDateStub()
}

const makeCalculateAmountStub = (): ICalculateAmount => {
  class CalculateAmountStub implements ICalculateAmount {
    calculate (value: string): string {
      return 'valid_amount'
    }
  }

  return new CalculateAmountStub()
}

const makeDigitVerificationStub = (): IDigitVerification => {
  class DigitVerificationStub implements IDigitVerification {
    validate = (completeDigitableLine: string): boolean => true
  }
  return new DigitVerificationStub()
}

const makeConverterToBarCodeStub = (): IConvertToBarCode => {
  class ConverterToBarCodeStub implements IConvertToBarCode {
    convert= (completeDigitableLine: string): string => 'valid_code'
  }
  return new ConverterToBarCodeStub()
}

type SutType = {
  calculateDateStub: ICalculateDate
  calculateAmountStub: ICalculateAmount
  digitVerificationStub: IDigitVerification
  converterToBarCodeStub: IConvertToBarCode
  sut: BoletoValidator
}

const makeSut = (): SutType => {
  const calculateDateStub = makeCalculateDateStub()
  const calculateAmountStub = makeCalculateAmountStub()
  const digitVerificationStub = makeDigitVerificationStub()
  const converterToBarCodeStub = makeConverterToBarCodeStub()
  const sut = new BoletoValidator(
    calculateDateStub,
    calculateAmountStub,
    digitVerificationStub,
    converterToBarCodeStub
  )

  return {
    calculateDateStub,
    calculateAmountStub,
    digitVerificationStub,
    converterToBarCodeStub,
    sut
  }
}

describe('Boleto validator', () => {
  const validDigitableLine = '21290001192110001210904475617405975870000002000'

  it('should return false if is called with any characters', () => {
    const { sut } = makeSut()
    expect(sut.handle('2129000119211000121090447561740597587000000200A'))
      .toEqual(badRequest('Inválido formato de linha digitável'))

    expect(sut.handle('A1290001192110001210904475617405975870000002000'))
      .toEqual(badRequest('Inválido formato de linha digitável'))

    expect(sut.handle('212.00011921100012109044756174059758700.000200A'))
      .toEqual(badRequest('Inválido formato de linha digitável'))

    expect(sut.handle('2120001192110001210904-47561740597587000002001.'))
      .toEqual(badRequest('Inválido formato de linha digitável'))

    expect(sut.handle('2129000119211000121090447561740597587000000200 '))
      .toEqual(badRequest('Inválido formato de linha digitável'))
  })

  it('should call the digitVerification with correct value', () => {
    const { sut, digitVerificationStub } = makeSut()
    const digitVerificationSpy = jest.spyOn(digitVerificationStub, 'validate')
    sut.handle(validDigitableLine)
    expect(digitVerificationSpy).toBeCalledWith(validDigitableLine)
  })

  it('should call the digitVerification only 1 time', () => {
    const { sut, digitVerificationStub } = makeSut()
    const digitVerificationSpy = jest.spyOn(digitVerificationStub, 'validate')
    sut.handle(validDigitableLine)
    expect(digitVerificationSpy).toBeCalledTimes(1)
  })

  it('should return a badRequest if digitVerification returns false', () => {
    const { sut, digitVerificationStub } = makeSut()
    jest.spyOn(digitVerificationStub, 'validate').mockReturnValueOnce(false)
    expect(sut.handle(validDigitableLine)).toEqual(badRequest('Inválido digito verificador'))
  })

  it('should call the ConvertCodeBar with correct value', () => {
    const { sut, converterToBarCodeStub } = makeSut()
    const converterToBarCodeSpy = jest.spyOn(converterToBarCodeStub, 'convert')
    sut.handle(validDigitableLine)
    expect(converterToBarCodeSpy).toBeCalledWith(validDigitableLine)
  })

  it('should call the ConvertCodeBar only 1 time', () => {
    const { sut, converterToBarCodeStub } = makeSut()
    const convertToBarCodeSpy = jest.spyOn(converterToBarCodeStub, 'convert')
    sut.handle(validDigitableLine)
    expect(convertToBarCodeSpy).toBeCalledTimes(1)
  })

  it('should call the CalculateDate with correct value', () => {
    const { sut, calculateDateStub } = makeSut()
    const calculateDateSpy = jest.spyOn(calculateDateStub, 'calculate')
    sut.handle(validDigitableLine)
    expect(calculateDateSpy).toBeCalledWith(validDigitableLine.substring(33, 37))
  })

  it('should call the CalculateDate only 1 time', () => {
    const { sut, calculateDateStub } = makeSut()
    const calculateDateSpy = jest.spyOn(calculateDateStub, 'calculate')
    sut.handle(validDigitableLine)
    expect(calculateDateSpy).toBeCalledTimes(1)
  })

  it('should call the CalculateAmount with correct value', () => {
    const { sut, calculateAmountStub } = makeSut()
    const calculateAmountSpy = jest.spyOn(calculateAmountStub, 'calculate')
    sut.handle(validDigitableLine)
    expect(calculateAmountSpy).toBeCalledWith(validDigitableLine.substring(37, 47))
  })

  it('should call the CalculateAmount only 1 time', () => {
    const { sut, calculateAmountStub } = makeSut()
    const calculateAmountSpy = jest.spyOn(calculateAmountStub, 'calculate')
    sut.handle(validDigitableLine)
    expect(calculateAmountSpy).toBeCalledTimes(1)
  })
  it('should return with correct values', () => {
    const { sut } = makeSut()
    const response = sut.handle(validDigitableLine)
    expect(response).toEqual(ok({
      barCode: 'valid_code',
      amount: 'valid_amount',
      expirationDate: 'valid_date'
    }))
  })
})
