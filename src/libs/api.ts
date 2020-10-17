import fs from "fs"
import path from "path"

const dataDir = path.join(process.cwd(), "data")

export const GetArrDep = async () => {
  const res = await fetch("http://localhost:3000/api.json")
  const apiData = await res.json()

  return apiData
}
