import { IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateTeamDTO {
  @IsOptional()
  @IsString()
  @MinLength(3)
  name?: string;

  @IsOptional()
  @IsString()
  @MinLength(3)
  country?: string;
}
