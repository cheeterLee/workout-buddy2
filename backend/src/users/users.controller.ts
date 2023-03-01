import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport'
import { CreateUserDto } from './dto/create-user.dto';

@Controller('register')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get('username')
    getUserByUsername(@Param('username') username: string) {
        return this.usersService.getUserByUsername(username)
    }

    @Post()
    registerUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.registerUser(createUserDto)
    }
}
