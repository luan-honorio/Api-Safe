

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import {format} from 'date-fns'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  public Users : UserEntity[] = [];

  constructor(
    @InjectRepository(UserEntity)
    private readonly userReposirory: Repository<UserEntity>
  ){}



 async  create(createUserDto: CreateUserDto):  Promise<UserEntity>{
  return this.userReposirory.save({
  ...createUserDto, 
  createdAt : new Date(), 
  })
  
}



  async findAll(): Promise<UserEntity[]> {
    return this.userReposirory.find();
  }

  async findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
