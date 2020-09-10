import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty({ description: '用户名', example: 'koa2', })
  name: string;

  @ApiProperty({
    description: 'The age of a user',
    example: 20,
  })
  age: number;
}