import { User } from ".";

export interface TeamNotice {
    id: number;
    title: string;
    body: string;
    created_at: string;
    updated_at: string;
    author?: User;
}