import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma, Habit } from '@prisma/client';

@Injectable()
export class HabitService {
  [x: string]: any;
  constructor(private prisma: PrismaService) {}

  async createHabit(data: Prisma.HabitCreateInput): Promise<Habit> {
    return this.prisma.habit.create({ data });
  }

  async getHabits(): Promise<Habit[]> {
    return this.prisma.habit.findMany();
  }

  async getHabit(habitId: number): Promise<Habit | null> {
    return this.prisma.habit.findUnique({ where: { habitId } });
  }

  async updateHabit(
    habitId: number,
    data: Prisma.HabitUpdateInput,
  ): Promise<Habit> {
    return this.prisma.habit.update({
      where: { habitId },
      data,
    });
  }

  async deleteHabit(habitId: number): Promise<Habit> {
    return this.prisma.habit.delete({ where: { habitId } });
  }
}
