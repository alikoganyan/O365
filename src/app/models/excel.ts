export interface Excel {
  name: string;
  id: string;
  webUrl: string;
  createdDateTime: any;
  lastModifiedDateTime: string;
  createdBy: {user: User};
  lastModifiedBy: {user: User};
}

export interface User {
  email: string;
  id: string;
  displayName: string;
}
