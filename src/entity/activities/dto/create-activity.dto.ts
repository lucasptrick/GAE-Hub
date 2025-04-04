import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateActivityDto {
  @IsNotEmpty()
  @IsString()
  categoriaAtividade: string;

  @IsNotEmpty()
  @IsString()
  atividadeRealizada: string;

  @IsNotEmpty()
  @IsNumber()
  cargaHoraria: number;


  @IsNotEmpty()
  @IsNumber()
  semestre: number;

  @IsNotEmpty()
  @IsString()
  certificadoURL: string;
}
