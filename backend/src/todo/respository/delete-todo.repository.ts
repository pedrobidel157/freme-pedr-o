import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma.config";

@Injectable()
export class DeleteTodoRepository{
    delete(id: string) {
        throw new Error("Method not implemented.");
    }
    constructor(private readonly prisma: PrismaService){}

    async execute(id:string){
        return await this.prisma.todo.delete({where:{id}})
    }
}
