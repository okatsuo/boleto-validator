export const Module10 = (value: string): number => {
  const code = value.split('').reverse()

  const summation = code.reduce((acc, current, index) => {
    let sum = Number(current) * (((index + 1) % 2) + 1)
    sum = (sum > 9 ? Math.trunc(sum / 10) + (sum % 10) : sum)
    return acc + sum
  }, 0)

  const result = (Math.ceil(summation / 10) * 10) - summation

  return result
}
