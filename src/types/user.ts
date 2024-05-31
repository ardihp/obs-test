export interface UserCompany {
  name: string;
  catchPhrase: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  company: UserCompany;
  avatar: string;
}
