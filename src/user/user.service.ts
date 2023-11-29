

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import {format} from 'date-fns'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { runInThisContext } from 'vm';

@Injectable()
export class UserService {
  

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ){}



 async  create(createUserDto: CreateUserDto):  Promise<UserEntity>{
  return this.userRepository.save({
  ...createUserDto, 
  createdAt : new Date(), 
  })
  
}



  async findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<UserEntity> {
    return this.userRepository.findOne({where : {id: id}});
  }


  
  async findEmpresa(cpf: string): Promise<UserEntity> {
    return this.userRepository.findOne({where : {cpf: cpf}});
  }



  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number): Promise<UserEntity> {
   const removeUser = await this.userRepository.findOne({where : {id : id}})
   if(removeUser){
    return await this.userRepository.remove(removeUser);
   }
  }
}
