import { TaskContent } from './TaskContent';
import { Methodology } from './Methodology';

export interface ChallangeType {
        Id: number;
        Name: string;
        Methodologies: Methodology[];
        Tasks: TaskContent[];
    }
