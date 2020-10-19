type APIDataElement = {
  dateTime: string
  dateTimeEpoch: number
  flightNumber: "string"
  flightType: "launch" | "landing"
  flightStatus: "PLANNED" | "CANCELLED" | string
  flightDetails: string
  flightDetailsUrl: string
  earthSite: string
  earthSiteCountryCode: string
  spaceSite: string
  payloadType: "satellite" | "space-shuttle" | string
  payloadDescription: string
  rocketType: string
  rocketDescription: string
  isManned: boolean
  dataSource: string
  missionUrl: string
  operator: string
}

export type APIData = {
  lastUpdated: string
  lastUpdatedEpoch: number
  sha256: string
  flights: APIDataElement[]
}
