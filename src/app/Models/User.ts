import { Person } from './Person';
export class User {
    Id: number;
    Login: string;
    Password: string;
    Email: string;
    IsAdmin: boolean;
    Token: string;

    ConnectedPeople: Person[];
}
