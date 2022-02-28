import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      //아무 decorator도 없는 어떠한 property의 object 거른다.
      //개발자가 정한 값이 아닌 다른값이 들어올 때 그 값이
      //service의 도달하기 전에 whitelist에서 걸러준다.
      whitelist: true,
      //이상한 값이 들어오면 에러 구문으로 ~요소는 잘못된 요소라고 띄어준다.
      forbidNonWhitelisted: true,
      //url의 id를 받아오려고 할 때, url은 string 값이라 number로
      //지정해 주어도 string type을 반환한다.
      //하지만 transform을 써주고 number type으로 지정해주면 type이 number로 바뀌게 된다.
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
