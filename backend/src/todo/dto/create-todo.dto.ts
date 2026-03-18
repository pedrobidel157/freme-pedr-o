//import {TodoPriority} from 'generated/prisma/enums';

export class CreateTodoDto {
    title: string;
    description: string;
    completed: boolean;
    priority: TodoPriotity;
    dueAt: Date;
    completedAt: Date

    userID: string;
    createdAT: Date;
    updatedAT: Date;}

enum TodoPriotity {LOW= 'LOM',
      MEDIUM= 'MEDIUM',
      HIGH='HING',}



