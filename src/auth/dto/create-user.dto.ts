import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'First name must be a string' })
  @IsNotEmpty({ message: 'First name should not be empty' })
  @ApiProperty({ example: 'John', description: 'The first name of the user' })
  firstName: string;

  @IsString({ message: 'Last name must be a string' })
  @IsNotEmpty({ message: 'Last name should not be empty' })
  @ApiProperty({ example: 'Doe', description: 'The last name of the user' })
  lastName: string;

  @IsString({ message: 'Email must be a string' })
  @IsNotEmpty({ message: 'Email should not be empty' })
  @IsEmail(
    { blacklisted_chars: '!?#*$' },
    { message: 'Email must be a valid email address' },
  )
  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'The email of the user',
  })
  email: string;

  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password should not be empty' })
  @Min(6, { message: 'Password must be at least 6 characters long' })
  @ApiProperty({
    example: 'strongPassword123',
    description: 'The password of the user',
  })
  password: string;
}
