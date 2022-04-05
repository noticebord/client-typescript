import { NestedTopic, User } from ".";

// TODO: Separate into different interfaces
// One should have body and the other shouldn't
export interface ListNotice {
    id: number;
    title: string;
    createdAt: string;
    updatedAt: string;
    author?: User;
    topics: NestedTopic[];
}