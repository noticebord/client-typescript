import { User } from ".";

export interface TeamNotice {
    id: number;
    title: string;
    body: string;
    createdAt: string;
    updatedAt: string;
    author?: User;
}