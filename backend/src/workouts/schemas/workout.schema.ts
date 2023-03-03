import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type WorkoutDocument = HydratedDocument<Workout>

@Schema({ timestamps: true })
export class Workout {
    @Prop()
    name: string

    @Prop()
    reps: number

    @Prop()
    load: number

    @Prop()
    username: string
}

export const WorkoutSchema = SchemaFactory.createForClass(Workout)