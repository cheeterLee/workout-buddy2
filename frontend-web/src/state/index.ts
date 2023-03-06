import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { WorkoutPopulated } from "../types"

interface AppState {
    user: string | null
    token: string | null
    workouts: WorkoutPopulated[]
}

const initialState: AppState = {
    user: null,
    token: null,
    workouts: [],
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin: (state, action: PayloadAction<any>) => {
            state.user = action.payload.user
            state.token = action.payload.token
        },
        setLogout: (state, action: PayloadAction<any>) => {
            state.user = null
            state.token = null
            state.workouts = []
        },
        setWorkouts: (state, action: PayloadAction<any>) => {
            state.workouts = action.payload.workouts
        }
    }
})

export const { setLogin, setLogout, setWorkouts } = authSlice.actions
export default authSlice.reducer