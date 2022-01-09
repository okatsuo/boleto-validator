import { ICalculateDate } from '../../domain/useCases/calculate-date'

export class CalculateDate implements ICalculateDate {
  private readonly thousandDays = 24 * 60 * 60 * 1000
  private readonly defaultDate = '10/07/1997'

  calculate = (value: string): string => {
    const date = new Date(this.defaultDate)
    const expirationDate = new Date(date.setTime(date.getTime() + (Number(value) * this.thousandDays)))

    const formatExpirationDate = expirationDate
      .toLocaleString('pt-BR')
      .split(' ')[0]
      .split('/')
      .reverse()
      .join('-')

    return formatExpirationDate
  }
}
