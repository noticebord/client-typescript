import { Team } from "../models";
import { Service } from "./service";

export class TeamService extends Service {
    constructor(token: string, baseUrl: string) {
        super(token, baseUrl);
    }

    /**
     * Fetch a list of all teams.
     */
    async fetchTeams() : Promise<Team[]> {
        const { data } = await this.api.get<Team[]>("/teams");
        return data;
    }

    /**
     * 
     * @param {Number} id The id of the team to find.
     */
    async fetchTeam(id: number) : Promise<Team> {
        const { data } = await this.api.get<Team>(`/teams/${id}`);
        return data;
    }
}