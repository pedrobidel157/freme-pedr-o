import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma.config";

@Injectable()
export class FindTodoByIdRepository{
  
   constructor(private readonly prisma: PrismaService){}

async findById(id:string){
        return await this.prisma.todo.findUnique({
            where:{id},
        });
    }
}
