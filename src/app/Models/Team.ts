import { Patron } from './Patron';
import { Person } from './Person';
import { Methodology } from './Methodology';

export class Team
{
    Id: number;
    Name: string;
    OwnerId: number;
    Methodologies: Methodology[];
    Members: Person[];
    Patrons: Person[];
}