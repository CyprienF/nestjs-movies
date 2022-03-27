import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { MovieModule } from './movie/movie.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MovieModule,
    PrismaModule
  ]
})
export class AppModule { }
