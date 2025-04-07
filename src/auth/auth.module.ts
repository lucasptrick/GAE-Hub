import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { StudentModule } from 'src/entity/student/student.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [StudentModule, JwtModule.register({
    secret: 'chave_super_secreta',
    signOptions: { expiresIn: '30d' },
  })],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
