import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivitiesModule } from './entity/activities/activities.module';
import { StudentModule } from './entity/student/student.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Activity } from './entity/activities/entities/activity.entity';
import { Student } from './entity/student/entities/student.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "atividadesComplementares.sqlite",
      entities: [Activity, Student],
      synchronize: true,
    }),

    ActivitiesModule, StudentModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
