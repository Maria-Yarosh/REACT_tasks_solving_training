export interface IRole {
    id: string,
    roleName: string,
    companyInfo?: ICompanyInfo[]
}

export interface ICompanyInfo {
    id: string,
    name: string
}