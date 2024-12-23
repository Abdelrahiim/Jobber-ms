import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma-clients/jobber-auth';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleDestroy , OnModuleInit {

	onModuleInit() {
		this.$connect();
	}
	onModuleDestroy() {
		this.$disconnect();
	}

}
