import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma.config";
import { CreateTodoDto } from "../dto/create-todo.dto";

@Injectable()
export class FindAllTodoRepository{
    findAll() {
        throw new Error("Method not implemented.");
    }
    constructor(private readonly prisma: PrismaService){}

    async execute (id: string){
        return await this.prisma.todo.findUnique({
            where: {id},
        });
    }
}