import {tasks} from '../models/tasks';
import { UserTaskStatuses } from './userTaskStatuses';
export interface AllTask{
    assigned:assigned[];
    created:created[];
}

export class assigned extends tasks{
    creatorName: string|any;
    status: string|any;
    userid: number|any;
}
export class created extends tasks{
    creatorName: string|any;
    status: string|any;
    userTaskStatuses:UserTaskStatuses|any;
}