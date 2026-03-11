import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma.config";

@Injectable()
export class DeleteTodoRepository{
    constructor(private readonly prisma: PrismaService){}

    async execute(id:string){
        return await this.prisma.todo.delete({where:{id}})
    }
}
