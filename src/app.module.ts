import { Module } from '@nestjs/common';
import { PlayersModule } from './players/players.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'FootRoots',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PlayersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
