import { IsString, IsInt } from 'class-validator';

export class CreateCookDto {
  @IsString() readonly name: string;

  @IsInt() readonly age: number;
}