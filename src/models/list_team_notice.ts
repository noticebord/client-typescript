import { User } from ".";

export interface ListTeamNotice {
    id: number;
    title: string;
    createdAt: string;
    updatedAt: string;
    author: User;
}