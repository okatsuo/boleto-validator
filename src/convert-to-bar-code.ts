export type IConvertToBarCode = {
  convert: (completeDigitableLine: string) => string
}

export class ConvertToBarCode implements IConvertToBarCode {
  convert (completeDigitableLine: string): string {
    let barCode = ''
    barCode += completeDigitableLine.substring(0, 3)
    barCode += completeDigitableLine.substring(3, 4)
    barCode += completeDigitableLine.substring(32, 33)
    barCode += completeDigitableLine.substring(33, 37)
    barCode += completeDigitableLine.substring(37, 47)
    barCode += completeDigitableLine.substring(4, 9)
    barCode += completeDigitableLine.substring(10, 20)
    barCode += completeDigitableLine.substring(21, 31)
    return barCode
  }
}
