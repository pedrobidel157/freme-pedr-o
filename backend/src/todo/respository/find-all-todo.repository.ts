import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma.config";

@Injectable()
export class FindAllTodosRepository{
    constructor(private readonly prisma: PrismaService){}

async execute(){
        return await this.prisma.todo.findMany()
    }
}
