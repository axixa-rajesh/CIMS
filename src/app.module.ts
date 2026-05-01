import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getDatabaseConfig } from './config/database.config';
import { Module } from '@nestjs/common';
import {UsersModule} from './modules/users/users.module';  
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        getDatabaseConfig(configService),
    }),
  ],
})
export class AppModule {}