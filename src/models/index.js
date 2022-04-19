// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, School } = initSchema(schema);

export {
  User,
  School
};