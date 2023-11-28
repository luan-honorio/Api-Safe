

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import {format} from 'date-fns'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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


  
  async findEmpresa(idEmpresa: string): Promise<UserEntity> {
    return this.userRepository.findOne({where : {idEmpresa: idEmpresa}});
  }



  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
