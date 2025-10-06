export interface IIndividualRole {
  roleId: string;
  roleName: string;
}

export interface IMemberWithIndividualRoles {
  userId: string;
  userName: string;
  email: string;
  individualRoles: IIndividualRole[];
}

export interface IAccountManagementCompanyRoleDetails {
  roleId: string;
  roleName: string;
  companyId: string;
  companyName: string;
  totalMembersCount: number;
  membersWithIndividualRoles: IMemberWithIndividualRoles[];
}

export interface ICompanyRoleShort {
  id: string;
  roleName: string;
}

export interface ICompany {
  id: string;
  name: string;
  roles: ICompanyRoleShort;
}
