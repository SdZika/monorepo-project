import type { Response, Request } from "express";
import { calculateFactorial } from "../models/factorialModel.js";

export const getFactorial = (req: Request, res: Response) => {
  
  const num = parseInt(req.query.num as string)

  if (isNaN(num)) {
    return res.status(400).json({error: "Invalid Input"})
  }

  try {

    const result = calculateFactorial(num)
    res.json({result})

  } catch(err: any) {

    res.status(400).json({error: err.message})

  }

}