import { IsNotEmpty, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateHabitDto {
  habitName: string;
  goal: string;
  frequency: string;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  completedAt: Date;
  userId: number;
  userName: string;
}
