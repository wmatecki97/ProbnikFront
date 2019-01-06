import { Patron } from './Patron';
import { Person } from './Person';
import { Methodology } from './Methodology';
export interface TeamDTO
{
    Id: number;
    Name: string;
    OwnerId: number;
    Methodologies: number[];
    Members: number[];
    Patrons: number[];
}