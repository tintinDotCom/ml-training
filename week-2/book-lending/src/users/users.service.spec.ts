import { DatabaseService } from 'src/database/database.service';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: DatabaseService) {}

  async findOneByEmail(email: string) {
    return this.prisma.users.findUnique({ where: { email } });
  }

  async findOneById(id: number) {
    return this.prisma.users.findUnique({ where: { id } });
  }

  async create(user: { email: string; password: string; name: string }) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    return this.prisma.users.create({
      data: {
        email: user.email,
        password: hashedPassword,
        name: user.name,
      },
    });
  }
}
