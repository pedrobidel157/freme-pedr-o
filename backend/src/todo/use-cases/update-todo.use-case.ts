import { Injectable, Logger } from "@nestjs/common";
import { UpdateTodoRepository } from "../respository";
import { UpdateTodoDto } from "../dto/update-todo.dto";


@Injectable()
  export class UpdateTodoUseCase {
    constructor(
        private readonly updateTodoRepository: UpdateTodoRepository,
        private readonly logger: Logger
    ){}

  async update(data: UpdateTodoDto, id:string){
    try {
        this.logger.log('Updating toDo ...');
        const todo = await this.updateTodoRepository.update;
        this.logger.log('ToDo updated successfully');
        return todo;
    } catch (error) {
        this.logger.error(error);
        throw new Error('Failed to update toDo');
    }
  }

  }