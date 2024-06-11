import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Request() req) {
    return { message: 'Logged in successfully' };
  }

  @Get('logout')
  logout(@Request() req) {
    req.logout();
    return { message: 'Logged out successfully' };
  }

  @Get('status')
  status(@Request() req) {
    if (req.isAuthenticated()) {
      return req.user;
    } else {
      return { message: 'Not authenticated' };
    }
  }
}
