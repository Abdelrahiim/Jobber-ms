import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma-clients/jobber-auth';
import { CreateUserInput } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  public async findAll() {
    return this.prisma.user.findMany();
  }

  public async createUser(data: CreateUserInput) {
		const hashedPassword = await bcrypt.hash(data.password, 10);

		return this.prisma.user.create({
			data: {
				email: data.email,
				password: hashedPassword,
				firstname: data.firstName,
				lastname: data.lastName,
				username: data.email.split('@')[0],
			}
		})
	}
}
