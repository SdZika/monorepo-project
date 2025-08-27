export const calculateFactorial = (num: number): number => {

  if ( num < 0) throw new Error("Bad Input")
  if (num === 0 || num === 1) return 1

  return num * calculateFactorial(num - 1)!

}