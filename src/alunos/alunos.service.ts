import { Injectable } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { Alunos } from './entities/alunos.entity';
import { AlunosRepository } from './repository/alunos.repository';

@Injectable()
export class AlunosService {
  constructor(private readonly alunosRepository: AlunosRepository){}
  cadastrar(createAlunoDto: CreateAlunoDto) {
    // Criar um novo aluno
    const aluno = new Alunos(
      createAlunoDto.nome, 
      createAlunoDto.endereco, 
      createAlunoDto.telefone, 
      createAlunoDto.email,
      );
    // Verificar se o aluno já existe
    //- Pega a lista de alunos e verifica se tem algum email igual
    // - Se tiver, lançar uma exceção (exception)
    // - teste unitario na camada de serviço

    this.alunosRepository.salvar(aluno)
  }
}

