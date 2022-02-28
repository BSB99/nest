import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}

// export class UpdateMovieDto {
//   @IsString()
//   readonly title?: string;
//   @IsNumber()
//   readonly year?: Number;
//   @IsString({ each: true })
//   readonly geners: string[];
// }

// PartialType(참조할값)은 위에 주석처리 한 코드와 같은 결과.
// 읽기전용이 아니니 ?를 붙여 어떤 것을 수정할지 모른다 라고 명시
