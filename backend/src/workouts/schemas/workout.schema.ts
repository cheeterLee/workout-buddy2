import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type WorkoutDocument = HydratedDocument<Workout>

@Schema()
export class Workout {
    @Prop()
    name: string
    @Prop()
    reps: number
    @Prop()
    load: number
}

export const WorkoutSchema = SchemaFactory.createForClass(Workout)