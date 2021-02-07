// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const SpaceportStatus = {
  "OPERATIONAL": "OPERATIONAL",
  "RESTRICTED": "RESTRICTED",
  "CLOSED": "CLOSED"
};

const { Flight, Spaceport } = initSchema(schema);

export {
  Flight,
  Spaceport,
  SpaceportStatus
};