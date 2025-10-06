import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IRole } from "../../interfaces/roles";
import { fakeApi } from "../../api/api";


export const fetchRoleById = createAsyncThunk<IRole, string>("roles/fetchById", 
  async (id) => {
  const role = await fakeApi.getRole(id);
  return role as IRole
  });

  export const fetchRoles = createAsyncThunk<IRole[]>("roles/fetch", 
    async () => {
    return await fakeApi.getRoles();
  })

  interface IRolesState {
  roles: IRole[] | null,
  isRolesLoading: boolean,
  error: string | null,
  role: IRole | null,
  isRoleLoading: boolean,
  roleError: string | null
}

const initialState = {
  roles: null,
  isRolesLoading: false,
  error: null,
  role: null,
  isRoleLoading: false,
  roleError: null
} satisfies IRolesState as IRolesState

const rolesSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchRoleById.pending, (state) => {
      state.isRoleLoading = true
      state.roleError = null
    })
    .addCase(fetchRoleById.fulfilled, (state, action: PayloadAction<IRole>) => {
      state.role = action.payload
      state.isRoleLoading = false
    })
    .addCase(fetchRoleById.rejected, (state) => {
      state.roleError = 'Ошибка загрузки'
      state.isRoleLoading = false
    })
    .addCase(fetchRoles.pending, (state) => {
          state.isRolesLoading = true
          state.error = null
        })
    .addCase(fetchRoles.fulfilled, (state, action: PayloadAction<IRole[]>) => {
          state.roles = action.payload
          state.isRolesLoading = false
        })
    .addCase(fetchRoles.rejected, (state) => {
          state.error = 'Ошибка загрузки'
          state.isRolesLoading = false
        })
  }
})

export default rolesSlice.reducer