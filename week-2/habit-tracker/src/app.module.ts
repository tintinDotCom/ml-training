import { PrismaService } from './prisma/prisma.service';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { HabitModule } from './habit/habit.module';
import { ProgressModule } from './progress/progress.module';

@Module({
  imports: [UserModule, HabitModule, ProgressModule],
  providers: [PrismaService],
})
export class AppModule {}
