export type Workout = {
    name: string
    reps: number
    load: number
}

export type WorkoutPopulated = {
    _id: number
    name: string
    reps: number
    load: number
    createDate: string
}

export type Dates = {
    monday: Date
    sunday: Date
}