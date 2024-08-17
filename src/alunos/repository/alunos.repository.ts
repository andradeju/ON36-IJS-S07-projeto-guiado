import { Injectable, Post, Body} from '@nestjs/common' ;
import { Alunos } from '../entities/alunos.entity';
import { AlunosService } from '../alunos.service';
import { randomUUID } from 'crypto';


@Injectable()
export class AlunosRepository {
  private readonly alunos: Alunos[] = []; 
  constructor(private readonly alunosService: AlunosService) {}

  @Post()
  salvar(aluno: Alunos): void {
    aluno.id = randomUUID();
    this.alunos.push(aluno);
    console.log(`Salvando aluno ${aluno.nome}`);
  }
}
