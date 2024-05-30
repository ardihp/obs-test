export interface ListUser {
  id: number;
  name: string;
  username: string;
  email: string;
  company: UserCompany;
}

export interface UserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
