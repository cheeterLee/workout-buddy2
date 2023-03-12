import { Injectable } from '@nestjs/common';
import { Workout, WorkoutDocument } from './schemas/workout.schema';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateWorkoutDto } from './dto/update-workout.dto';

@Injectable()
export class WorkoutsService {
  constructor(
    @InjectModel(Workout.name) private workoutModel: Model<WorkoutDocument>,
  ) {}

  // Create single workout
  async createWorkout(createWorkoutDto: CreateWorkoutDto): Promise<Workout> {
    const createdWorkout = new this.workoutModel(createWorkoutDto);
    return createdWorkout.save();
  }

  // Update single workout
  async updateWorkout(
    id: number,
    updateWorkoutDto: UpdateWorkoutDto,
  ): Promise<Workout> {
    const updatedWorkout = await this.workoutModel.findByIdAndUpdate(
      id,
      updateWorkoutDto,
    );
    return updatedWorkout.save();
  }

  // Get all workouts
  async getAllWorkouts(username: string): Promise<Workout[]> {
    return this.workoutModel.find({ username: username }).exec();
  }

  // Get gellAllCompletedWorkouts
  async getAllCompletedWorkouts(
    username: string,
    createdDate: string,
  ): Promise<Workout[]> {
    return this.workoutModel
      .find({ username: username, createdDate: createdDate, isCompleted: true })
      .exec();
  }

  // Get single workout
  async getSingleWorkout(id: number) {
    return this.workoutModel.findById(id).exec();
  }

  // Delete single workout
  async deleteWorkout(id: number) {
    return this.workoutModel.findByIdAndDelete(id).exec();
  }
}
