import { ChallangeType } from './ChallengeType';
export interface TaskContent {
        Id: number;
        Content: string;
        ChallangeTypeId: number;
        ChallangeType: ChallangeType;
        TaskNumber: number;
    }
