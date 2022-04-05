import { User } from ".";

export interface ListTeamNotice {
    id: number;
    title: string;
    created_at: string;
    updated_at: string;
    author: User;
}