import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // ✅ Enable CORS
  app.enableCors({
    origin: 'http://localhost:3000', // your frontend origin
    credentials: true, // if you use cookies or auth
  });
  app.setGlobalPrefix('api/v1');
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 8080;
  await app.listen(port);
  console.log(`NestJS server running on http://localhost:${port}`);
}
bootstrap();
