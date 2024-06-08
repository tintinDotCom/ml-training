import { Decimal } from '@prisma/client/runtime/library';

export class CreateProductDto {
  name: string;
  type?: string;
  price: Decimal;
  stock?: number;
}
