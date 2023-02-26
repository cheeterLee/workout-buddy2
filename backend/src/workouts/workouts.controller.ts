import { Body, Controller, Get, Post } from '@nestjs/common';
import { WorkoutsService } from './workouts.service';
import { Workout } from './schemas/workout.schema'
import { CreateWorkoutDto } from './dto/create-workout.dto';

@Controller('workouts')
export class WorkoutsController {
    constructor(private workoutService: WorkoutsService) {}

    @Get()
    async findAll(): Promise<Workout[]> {
        return this.workoutService.findAll()
    }
    
    @Post()
    async create(@Body() createWorkoutDto: CreateWorkoutDto): Promise<Workout> {
        return this.workoutService.create(createWorkoutDto)
    }
}
