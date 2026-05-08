import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  login(loginDto: LoginDto) {
    const payload = {
      email: loginDto.email,
    };

    const token = this.jwtService.sign(payload);

    return {
      success: true,
      message: 'Login successful',
      token,
      user: {
        email: loginDto.email,
      },
    };
  }
}