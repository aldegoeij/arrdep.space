type APIDataElement = {
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
