export type APIDataElement = {
  dateTime: string
  dateTimeEpoch: number
  number: "string"
  type: "launch" | "landing"
  flightStatus: "PLANNED" | "CANCELLED" | string
  details: string
  detailsUrl: string
  earthSite: string
  earthSiteCountryCode: string
  spaceSite: string
  spaceSiteType: "planet" | "astroid" | "iss" | "orbit" | string
  payloadType: "satellite" | "space-shuttle" | string
  payloadDescription: string
  rocketType: string
  rocketDescription: string
  isManned: boolean
  dataSource: string
  missionUrl: string
  operator: string
  operatorUrl: string
}

export type APIData = {
  lastUpdated: string
  lastUpdatedEpoch: number
  sha256: string
  flights: APIDataElement[]
}

export type Spaceport = {
  id: string
  slug: string
  name: string
  [key: string]: any
}

export const getArrDeps = async (): Promise<APIData> => {
  const res = await fetch("http://localhost:3000/api/arrdeps.json")
  const apiData = await res.json()

  return apiData
}

export const getSpaceports = async (): Promise<Spaceport[]> => {
  const res = await fetch("http://localhost:3000/api/spaceports.json")
  const apiData = await res.json()

  return apiData
}
