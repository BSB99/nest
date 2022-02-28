import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: Number;
  // 장르는 필수가 아니므로 IsOptional을 써준다.
  @IsOptional()
  @IsString({ each: true })
  readonly geners: string[];
}
