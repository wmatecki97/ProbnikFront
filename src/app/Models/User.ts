import { Person } from './Person';
interface UserDTO {
    Id: number;
    Login: string;
    Password: string;
    Email: string;
    IsAdmin: boolean;
    Token: string;

    ConnectedPeople: Person[];
}
