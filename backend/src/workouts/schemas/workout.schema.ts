import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type WorkoutDocument = HydratedDocument<Workout>

const formateDate = (date: Date): string => {
	const padTo2Digits = (num: number): string => {
		return num.toString().padStart(2, "0")
	}
	return [
		date.getFullYear(),
		padTo2Digits(date.getMonth() + 1),
		padTo2Digits(date.getDate()),
	].join(".")
}

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

    @Prop({ default: formateDate(new Date(Date.now())) })
    createdDate: string
}

export const WorkoutSchema = SchemaFactory.createForClass(Workout)