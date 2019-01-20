import { TaskState } from './TaskState';
import { Patron } from './Patron';
import { Person } from './Person';
import { TaskContent } from './TaskContent';

export class Challange {
    Id: number | null;
    Owner: Person;
    Task: TaskContent;
    Mission: string;
    State: TaskState;
    Comment: string;
    Patron: Patron;
}