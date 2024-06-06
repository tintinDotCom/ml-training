import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';
import { DatabaseModule } from './database/database.module';
import { ToDoModule } from './to-do/to-do.module';

@Module({
  imports: [DatabaseModule, ToDoModule],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
