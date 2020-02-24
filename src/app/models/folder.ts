import {User} from './excel';

export interface Folders {
  id: string;
  name: string;
  webUrl: string;
  createdDateTime: any;
  createdBy: {user: User };
  lastModifiedBy: {user: User };
}
