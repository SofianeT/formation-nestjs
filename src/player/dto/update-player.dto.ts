import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class UpdatePlayerDto {
  @ApiProperty({
    example: 'John',
    description: 'First name of the player',
    type: String,
  })
  @IsString()
  @IsOptional()
  firstName: string;

  @ApiProperty({
    example: 'Doe',
    description: 'Last name of the player',
    type: String,
  })
  @IsString()
  lastName: string;

  @ApiProperty({
    example: 1,
    description: 'ID of the team the player belongs to',
    type: Number,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  teamId: number;

  @ApiProperty({
    example: 2,
    description: 'ID of the position the player plays',
    type: Number,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  positionId: number;
  id: any;
}
