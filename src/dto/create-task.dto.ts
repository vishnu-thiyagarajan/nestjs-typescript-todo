import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  readonly title: string;

  @IsString()
  @IsOptional()
  readonly description?: string;

  @IsBoolean()
  @IsOptional()
  readonly completed?: boolean;

  @IsOptional()
  readonly createDate?: Date;

  @IsOptional()
  readonly completedDate?: Date;
}
