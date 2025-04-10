import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { StudentFromJwt } from '../models/StudentFromJwt'; //StudentFromJwt
import { StudentPayload } from '../models/StudentPayload'; //StudentPayload

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'chave_super_secreta',
    });
  }

  async validate(payload: StudentPayload): Promise<StudentFromJwt> { 
    return {
      id: payload.sub,
      nome: payload.nome,
      email: payload.email,
    };
  }
}