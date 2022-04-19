import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SchoolMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly height?: string | null;
  readonly weight?: string | null;
  readonly ACT?: string | null;
  readonly SAT?: string | null;
  readonly UGPA?: string | null;
  readonly WGPA?: string | null;
  readonly HSGradYear?: string | null;
  readonly Position?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class School {
  readonly id: string;
  readonly name?: string | null;
  readonly location?: string | null;
  readonly division?: string | null;
  readonly conference?: string | null;
  readonly coach?: string | null;
  readonly image_url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<School, SchoolMetaData>);
  static copyOf(source: School, mutator: (draft: MutableModel<School, SchoolMetaData>) => MutableModel<School, SchoolMetaData> | void): School;
}