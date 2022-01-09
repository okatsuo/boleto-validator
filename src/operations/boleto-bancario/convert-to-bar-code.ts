import { IConvertToBarCode } from '../../domain/useCases/convert-to-bar-code'

export class ConvertToBarCode implements IConvertToBarCode {
  convert = (digitableLine: string): string => {
    let barCode = ''
    barCode += digitableLine.substring(0, 3)
    barCode += digitableLine.substring(3, 4)
    barCode += digitableLine.substring(32, 33)
    barCode += digitableLine.substring(33, 37)
    barCode += digitableLine.substring(37, 47)
    barCode += digitableLine.substring(4, 9)
    barCode += digitableLine.substring(10, 20)
    barCode += digitableLine.substring(21, 31)
    return barCode
  }
}
