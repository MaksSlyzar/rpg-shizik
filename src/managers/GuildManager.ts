import { Guild } from "discord.js";
class GuildManager {
    guild: Guild;

    constructor (guild: Guild) {
        this.guild = guild;
    }
}

export default GuildManager;