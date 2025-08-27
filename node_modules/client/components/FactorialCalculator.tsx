import { useState } from "react"

export const FactorialCalculator = () => {
  const [number, setNumber] = useState("")
  const [result, setResult] = useState<string | null>(null)

  const calculate = async () => {
    if (!number) return

    try {
      const res = await fetch(`http://localhost:9000/api/factorial?num=${number}`)
      const data = await res.json()

      if (data.error) {
        setResult(`Error: ${data.error}`)
      } else {
        setResult(`Result: ${data.result}`)
      }
    } catch {
      setResult("Server error")
    }
  }

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={calculate}>Calculate</button>
      {result && <p>{result}</p>}
    </div>
  )
}
