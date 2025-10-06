import { companies, roles, users } from "../stub/subData";

interface ICompanyResponse {
  id: string,
  name: string,
  roles: {
    id: string,
    roleName: string
  }
}

interface IRoleResponse {
  id: string,
  roleName: string
}

interface IUsersResponse {
  id: number,
  name: string,
  age: number,
  city: string,
  interests: string[]
}

export const fakeApi = {
  getCompanies(): Promise<ICompanyResponse[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(companies), 1000);
    });
  },
  getCompany(id: string): Promise<ICompanyResponse[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(companies.filter(company => company.id === id)), 1000);
    });
  },
  getRole(id: string): Promise<IRoleResponse | undefined | string> {
    return new Promise((resolve, reject) => {
      // setTimeout(() => resolve(roles.find(role => role.id === id)), 1000);
      setTimeout(() => reject(`ошибка ${id}`), 1000)
    });
  },
  getRoles(): Promise<IRoleResponse[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(roles), 1000)
    })
  },
  getUsers(): Promise<IUsersResponse[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(users), 1000)
    })
  }
};

