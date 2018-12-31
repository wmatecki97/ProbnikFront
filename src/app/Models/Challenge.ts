import { TaskState } from './TaskState';
import { Patron } from './Patron';
import { Person } from './Person';
import { TaskContent } from './TaskContent';

export interface Challange {
        Id: number;
        Owner: Person;
        Task: TaskContent;
        TaskId: number;
        Mission: string;
        State: TaskState;
        Comments: string[];
        Patron: Patron;
    }
