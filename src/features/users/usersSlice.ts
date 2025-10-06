import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fakeApi } from "../../api/api";
import type { IUser } from "../../interfaces/users";

export const fetchUsers = createAsyncThunk<IUser[]>('users/fetch', 
    async () => {
        const users = await fakeApi.getUsers()
        return users.map((user) => {
            return {
                id: user.id,
                name: user.name,
                age: user.age,
                city: user.city,
                hobbies: user.interests
            }
        } )
    }
)


interface IUsersState {
    users: IUser[] | null,
    isUsersLoading: boolean,
    usersError: string | null
}

const initialState = {
    users: null,
    isUsersLoading: false,
    usersError: null
} satisfies IUsersState as IUsersState

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
         .addCase(fetchUsers.pending, (state) => {
      state.isUsersLoading = true
      state.usersError = null
    })
    .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
      state.users = action.payload
      state.isUsersLoading = false
    })
    .addCase(fetchUsers.rejected, (state) => {
      state.usersError = 'Ошибка загрузки'
      state.isUsersLoading = false
    })
    }
})

export default userSlice.reducer