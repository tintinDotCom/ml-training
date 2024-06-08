import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { ProgressService } from './progress.service';
import { ProgressController } from './progress.controller';

@Module({
  providers: [ProgressService, PrismaService],
  controllers: [ProgressController],
})
export class ProgressModule {}
