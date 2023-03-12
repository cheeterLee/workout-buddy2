import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { WorkoutPopulated } from "../types"

interface AppState {
    user: string | null
    token: string | null
    workouts: WorkoutPopulated[]
    completedWorkouts: WorkoutPopulated[]
}

const initialState: AppState = {
    user: null,
    token: null,
    workouts: [],
    completedWorkouts: [], 
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
        },
        setCompletedWorkouts: (state, action: PayloadAction<any>) => {
            state.completedWorkouts = action.payload.completedWorkouts
        }
    }
})

export const { setLogin, setLogout, setWorkouts, setCompletedWorkouts } = authSlice.actions
export default authSlice.reducer