import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  await app.listen(PORT)

  console.log(`[Bootstrap] HTTP Server listening on port ${PORT}`);
}

bootstrap();