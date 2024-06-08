import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma, Progress } from '@prisma/client';

@Injectable()
export class ProgressService {
  constructor(private prisma: PrismaService) {}

  async createProgress(data: Prisma.ProgressCreateInput): Promise<Progress> {
    return this.prisma.progress.create({ data });
  }

  async getProgresses(): Promise<Progress[]> {
    return this.prisma.progress.findMany();
  }

  async getProgress(progressId: number): Promise<Progress | null> {
    return this.prisma.progress.findUnique({ where: { progressId } });
  }

  async updateProgress(
    progressId: number,
    data: Prisma.ProgressUpdateInput,
  ): Promise<Progress> {
    return this.prisma.progress.update({
      where: { progressId },
      data,
    });
  }

  async deleteProgress(progressId: number): Promise<Progress> {
    return this.prisma.progress.delete({ where: { progressId } });
  }
}
