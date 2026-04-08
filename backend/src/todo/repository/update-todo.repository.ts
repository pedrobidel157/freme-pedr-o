import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma.config";
import { UpdateTodoDto } from "../dto/update-todo.dto";

@Injectable()
export class UpdateTodoRepository{
    execute(id:string) {
        throw new Error("Method not implemented.");
    }
    constructor(private readonly prisma: PrismaService){}

    async update(data: UpdateTodoDto, id:string
    ){
        return await this.prisma.todo.update({where: {id}, data})
    }
}
