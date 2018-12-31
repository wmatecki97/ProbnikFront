import { Patron } from './Patron';
import { Person } from './Person';
export interface Team {
    Id: number;
    Name: string;
    Owner: Person;
    OwnerId: number;
    Methodologies: Methodology[];
    Members: Person[];
    Patrons: Patron[];
}
