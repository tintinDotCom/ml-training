import { Injectable } from '@nestjs/common';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Habit } from '@prisma/client';

@Injectable()
export class HabitsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateHabitDto): Promise<Habit> {
    return this.prisma.habit.create({
      data: {
        habitName: data.habitName,
        goal: data.goal,
        frequency: data.frequency,
        completedAt: data.completedAt,
        user: {
          connect: {
            userId: data.userId,
          },
        },
      },
    });
  }

  async findAll(): Promise<Habit[]> {
    return this.prisma.habit.findMany();
  }

  async findOne(habitId: number): Promise<Habit | null> {
    return this.prisma.habit.findUnique({
      where: {
        habitId: habitId,
      },
    });
  }

  async update(
    habitId: number,
    updateHabitDto: UpdateHabitDto,
  ): Promise<Habit> {
    return this.prisma.habit.update({
      where: {
        habitId: habitId,
      },
      data: {
        ...updateHabitDto,
      },
    });
  }

  async remove(habitId: number): Promise<Habit> {
    return this.prisma.habit.delete({
      where: {
        habitId: habitId,
      },
    });
  }
}
