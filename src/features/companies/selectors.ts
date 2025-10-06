import type { RootState } from "../../app/store";
import type { ICompany } from "../../interfaces/companies";

export const selectCompaniesList = (state: RootState): ICompany[] | null => {
    return state.companies.companies
}

export const selectCompaniesLoading = (state: RootState): boolean => {
    return state.companies.isCompaniesLoading
}

export const selectCompaniesError = (state: RootState): string | null=> {
    return state.companies.error
}

export const selectCompany = (state: RootState): ICompany | null => {
    return state.companies.company
}

export const selectCompanyLoading = (state: RootState): boolean => {
    return state.companies.isCompanyLoading
}

export const selectCompanyError = (state: RootState): string | null=> {
    return state.companies.companyError
}