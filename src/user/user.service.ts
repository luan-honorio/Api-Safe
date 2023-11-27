import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import {format} from 'date-fns'

@Injectable()
export class UserService {
  public Users : User[] = [];

 async  create(createUserDto: CreateUserDto):  Promise<User>{
  
  const usuariocadastro : User = {
    ...createUserDto,
    id : this.Users.length + 1,
    createdAt : Date.now(),
    
};
    
    this.Users.push(usuariocadastro);
    return usuariocadastro;
  


  }

  async findAll(): Promise<User> {
    return this.Users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
