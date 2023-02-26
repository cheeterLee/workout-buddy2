import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { WorkoutsService } from './workouts.service';
import { Workout } from './schemas/workout.schema';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';

@Controller('workouts')
export class WorkoutsController {
  constructor(private workoutService: WorkoutsService) {}

  // GET /workouts
  @Get()
  async findAll(): Promise<Workout[]> {
    return this.workoutService.getAllWorkouts();
  }

  // GET /workouts/:id --> { ... }
  @Get(':id')
  async getSingleWorkout(@Param('id') id: number): Promise<Workout> {
    try {
      return this.workoutService.getSingleWorkout(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  // POST /workouts
  @Post()
  async createWorkout(
    @Body() createWorkoutDto: CreateWorkoutDto,
  ): Promise<Workout> {
    return this.workoutService.createWorkout(createWorkoutDto);
  }

  // DELETE /workouts/:id
  @Delete(':id')
  async deleteSingleWorkout(@Param('id') id: number): Promise<Workout> {
    try {
      return this.workoutService.deleteWorkout(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  // PUT /workouts/:id
  @Put(':id')
  async updateWorkout(
    @Param('id') id: number,
    @Body() updateWorkoutDto: UpdateWorkoutDto,
  ): Promise<Workout> {
    try {
      return this.workoutService.updateWorkout(id, updateWorkoutDto);
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
