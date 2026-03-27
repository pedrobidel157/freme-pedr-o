import { Injectable, Logger } from "@nestjs/common";
import { FindAllTodoRepository} from "../respository";

@Injectable()
 export class FindAllUseCase{
    constructor(
        private readonly findAllTodosRepository: FindAllTodoRepository,
        private readonly logger: Logger
    ){}

    async execute(){
        try{
            this.logger.log("Fetching all todos...");
            const todo = await this.findAllTodosRepository.findAll();
            this.logger.log("Todos fetched successfufly!");
            return todo;
        }   catch (error) {
            this.logger.error(error);
            throw new Error("Failed to fetch todos");
        }
    }
 }