import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async validateUser(email: string, pass: string): Promise<any>  {
        try {
            const user = await this.usersService.getUserByEmail(email)
            // prevent password returning to frontend
            // const { password, ...result } = user
            // return result
            return user
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async login(user: any) {
        const payload = {
            email: user.email,
            sub: user.id
        }
        return {
            user: payload.email,
            token: this.jwtService.sign(payload)
        }
    }
}
