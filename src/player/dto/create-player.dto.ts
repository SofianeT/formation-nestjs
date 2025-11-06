import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString } from 'class-validator';

export class CreatePlayerDto {
  @ApiProperty({
    example: 'John',
    description: 'First name of the player',
    type: String,
  })
  @IsString()
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
  teamId: number;

  @ApiProperty({
    example: 2,
    description: 'ID of the position the player plays',
    type: Number,
  })
  @IsNumber()
  @IsPositive()
  positionId: number;
}
