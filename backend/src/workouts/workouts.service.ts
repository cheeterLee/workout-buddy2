import { Injectable } from '@nestjs/common';
import { Workout, WorkoutDocument } from './schemas/workout.schema';
import { CreateWorkoutDto } from './dto/creata-workout.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class WorkoutsService {
  constructor(
    @InjectModel(Workout.name) private workoutModel: Model<WorkoutDocument>,
  ) {}

  async create(createWorkoutDto: CreateWorkoutDto): Promise<Workout> {
    const createdWorkout = new this.workoutModel(createWorkoutDto)
    return createdWorkout.save()
  }

  async findAll(): Promise<Workout[]> {
    return this.workoutModel.find().exec()
  }
}
