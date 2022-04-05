import { User, Notice } from "../models";
import { Service } from "./service";

export class UserService extends Service {
    constructor(token: string, baseUrl: string) {
        super(token, baseUrl);
    }

    /**
     * Fetch a list of all users.
     * 
     * @returns An array of all users.
     */
    async fetchUsers(): Promise<User[]> {
        const response = await this.api.get<User[]>("/users");
        return response.data;
    }

    /**
     * Fetch a single user.
     * 
     * @param user The user ID
     * @returns The user
     */
    async fetchUser(user: number): Promise<User> {
        const response = await this.api.get<User>(`/users/${user}`);
        return response.data;
    }

    /**
     * Fetch the current user.
     * 
     * @returns The user
     */
    async fetchCurrentUser(): Promise<User> {
        const response = await this.api.get<User>(`/user`);
        return response.data;
    }

    /**
     * Fetch a list of all notices belonging to a user.
     * 
     * @param team The user ID
     * @returns A list of notices belonging to the user.
     */
    async fetchUserNotices(user: number): Promise<Notice[]> {
        const response = await this.api.get<Notice[]>(`/users/${user}/notices`);
        return response.data;
    }

    /**
     * Fetch a list of all notes belonging to a user.
     * 
     * @param team The user ID
     * @returns A list of notes belonging to the user.
     */
    async fetchUserNotes(user: number): Promise<Notice[]> {
        const response = await this.api.get<Notice[]>(`/users/${user}/notes`);
        return response.data;
    }
}