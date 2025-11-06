import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class CreateTeamDTO {
  @IsString()
  @MinLength(3)
  @ApiProperty({ description: 'Nom de l équipe', example: 'PSG', minimum: 3 })
  name: string;

  @IsString()
  @MinLength(3)
  @ApiProperty({ description: 'Pays de l équipe', example: 'France' })
  country: string;
}
