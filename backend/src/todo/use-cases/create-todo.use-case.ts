import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma.config";
import { CreateTodoDto } from "../dto/create-todo.dto";

@Injectable()
export class CreateTodoRepository{
    constructor(private readonly prisma: PrismaService){}

    async executw(data: CreateTodoDto){
        return await this.prisma.todo.create({data})
    }
}