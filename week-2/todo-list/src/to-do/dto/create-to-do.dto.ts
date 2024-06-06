export class CreateToDoDto {
  title: string;
  description: string;
  completed: boolean;
  due: Date;

  // constructor(data: Partial<CreateToDoDto>) {
  //   this.validateTitle(data.title);
  //   this.validateDescription(data.description);
  //   this.validateDue(data.due);

  //   this.title = data.title;
  //   this.description = data.description;
  //   this.due = data.due;
  // }

  // private validateTitle(
  //   title: unknown,
  // ): asserts title is string & NonNullable<string> {
  //   if (typeof title !== 'string' || title.trim().length === 0) {
  //     throw new Error('Title must be a non-empty string');
  //   }
  // }

  // private validateDescription(
  //   description: unknown,
  // ): asserts description is string & NonNullable<string> {
  //   if (typeof description !== 'string' || description.trim().length === 0) {
  //     throw new Error('Description must be a non-empty string');
  //   }
  // }

  // private validateDue(due: unknown): asserts due is Date {
  //   if (!(due instanceof Date) || isNaN(due.getTime())) {
  //     throw new Error('Due date must be a valid date');
  //   }
  // }
}
