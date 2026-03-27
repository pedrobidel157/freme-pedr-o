import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { FindTodoByIdRepository, UpdateTodoRepository } from "../respository";

@Injectable()
 export class DeleteTodoUseCase{
   constructor(
        private readonly updateTodoRepository: UpdateTodoRepository,
        private readonly findTodoByIdRepository:FindTodoByIdRepository,
        private readonly logger: Logger,
    ){}
  
   async execute(id:string) {
try{
    this.logger.log('Updating toDo...');

    const todo = await this.findTodoByIdRepository.findById(id);
    
    if (!todo) {
        throw new NotFoundException('ToDO not found');
    }
    await this.updateTodoRepository.execute(id);
    this.logger.log('ToDo deleted successfully');
    return todo;    
   }catch(error){
    this.logger.error(error);
    throw error; 
    
   }
   }
 }