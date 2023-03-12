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
    isCompleted: boolean
}

export type Dates = {
    monday: Date
    tuesday: Date
    wednesday: Date
    thursday: Date
    friday: Date
    saturday: Date
    sunday: Date
}