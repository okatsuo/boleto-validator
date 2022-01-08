export type ICalculateDate = {
  calculate: (value: string) => string
}

export class CalculateDate implements ICalculateDate {
  calculate = (value: string): string => {
    const date = new Date('10/07/1997')
    const expirationDate = new Date(date.setTime(date.getTime() + (Number(value) * 24 * 60 * 60 * 1000)))

    const formatExpirationDate = expirationDate
      .toLocaleString('pt-BR')
      .split(' ')[0]
      .split('/')
      .reverse()
      .join('-')

    return formatExpirationDate
  }
}
