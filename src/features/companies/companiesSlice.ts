import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fakeApi } from "../../api/api";
import type { ICompany } from "../../interfaces/companies";

export const fetchCompanies = createAsyncThunk<ICompany[]>("companies/fetch", 
  async () => {
  return await fakeApi.getCompanies();
});

export const fetchCompanyById = createAsyncThunk<ICompany, string>("companies/fetchById", 
  async (id) => {
  const company = await fakeApi.getCompany(id);
  return company[0] as ICompany
  });

interface ICompaniesState {
  companies: ICompany[] | null,
  isCompaniesLoading: boolean,
  error: string | null,
  company: ICompany | null,
  isCompanyLoading: boolean,
  companyError: string | null
}

const initialState = {
  companies: null,
  isCompaniesLoading: false,
  error: null,
  company: null,
  isCompanyLoading: false,
  companyError: null
} satisfies ICompaniesState as ICompaniesState

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchCompanies.pending, (state) => {
      state.isCompaniesLoading = true
      state.error = null
    })
    .addCase(fetchCompanies.fulfilled, (state, action: PayloadAction<ICompany[]>) => {
      state.companies = action.payload
      state.isCompaniesLoading = false
    })
    .addCase(fetchCompanies.rejected, (state) => {
      state.error = 'Ошибка загрузки'
      state.isCompaniesLoading = false
    })
    .addCase(fetchCompanyById.pending, (state) => {
      state.isCompanyLoading = true
      state.companyError = null
    })
    .addCase(fetchCompanyById.fulfilled, (state, action: PayloadAction<ICompany>) => {
      state.company = action.payload
      state.isCompanyLoading = false
      state.companyError = null
    })
    .addCase(fetchCompanyById.rejected, (state) => {
      state.companyError = 'Ошибка загрузки'
      state.isCompanyLoading = false
    })
  }
})

export default companySlice.reducer