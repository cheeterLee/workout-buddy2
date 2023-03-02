import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getUserByEmail(email: string) {
    return this.userModel.findOne({
        email
    }).exec()
  }

  async registerUser(createUserDto: CreateUserDto) {
    const createUser = new this.userModel(createUserDto)
    const user = await this.getUserByEmail(createUser.email)
    if (user) {
        throw new BadRequestException()
    }
    return createUser.save()
  }
}

