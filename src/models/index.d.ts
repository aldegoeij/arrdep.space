import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum SpaceportStatus {
  OPERATIONAL = "OPERATIONAL",
  RESTRICTED = "RESTRICTED",
  CLOSED = "CLOSED"
}



export declare class Flight {
  readonly id: string;
  constructor(init: ModelInit<Flight>);
  static copyOf(source: Flight, mutator: (draft: MutableModel<Flight>) => MutableModel<Flight> | void): Flight;
}

export declare class Spaceport {
  readonly id: string;
  readonly LID?: string;
  readonly ICAO?: string;
  readonly IATA?: string;
  readonly name: string;
  readonly country?: string;
  readonly countryCode?: string;
  readonly status?: SpaceportStatus | keyof typeof SpaceportStatus;
  readonly wiki_url?: string;
  readonly url?: string;
  constructor(init: ModelInit<Spaceport>);
  static copyOf(source: Spaceport, mutator: (draft: MutableModel<Spaceport>) => MutableModel<Spaceport> | void): Spaceport;
}