import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport'
import { CreateUserDto } from './dto/create-user.dto';

@Controller('register')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get('email')
    getUserByEmail(@Param('email') email: string) {
        return this.usersService.getUserByEmail(email)
    }

    @Post()
    registerUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.registerUser(createUserDto)
    }
}
