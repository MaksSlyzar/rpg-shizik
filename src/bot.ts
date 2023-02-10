import config from "./config"
import { Client, TextChannel } from "discord.js"
import GuildManager from "./managers/GuildManager";
import CompasManager from "./managers/Compas/CompasManager";

export const client = new Client({ intents: ["Guilds", 
                                            "GuildMessages", 
                                            "DirectMessages", 
                                            "MessageContent", 
                                            "GuildVoiceStates", 
                                            "GuildMessageReactions", 
                                            "DirectMessageReactions", 
                                            "GuildPresences", 
                                            "GuildEmojisAndStickers", 
                                            "GuildIntegrations",
                                            "GuildMembers",
                                            "GuildScheduledEvents"] })


const guildManagers: Array<GuildManager> = [];

client.once("ready", () => {
    console.log("Runned chupapi bot!");
    
    client.guilds.cache.map(guild => {
        const guildManager = new GuildManager(guild);
        guildManagers.push(guildManager);
    });

});

client.on("messageReactionAdd", (reaction) => {
    // console.log(reaction)
});

client.on("messageCreate", async message => {
    if (message.author.bot == true)
        return;

    const compas = new CompasManager(message.author, message.channel as TextChannel);

    // const mainGuild = client.guilds.cache.find(g => g.id == "762420182047260703")?.emojis;
    // const emojies = mainGuild?.cache.map(em => em)

    if (message.content[0] != "!")
        return;
    
    const commandName: string = message.content.split(" ")[0].slice(1);
    const guildId = message.guildId;
    let guildManager: GuildManager | undefined;

    for (const value of guildManagers) 
        if (value.guild.id == guildId)
            guildManager = value;

    // if (guildManager == undefined)
    //     return message.channel.send("This guild is not in my datebase. I am sorry:(");
    if (guildManager == undefined) {
        message.channel.send("This guild is not in my datebase. I am sorry:(");    
        return;
    }


    // for (const command of commands) {
    //     if (command.name == commandName)
    //         return await command.execute(message, client, guildManager);
    // }

    message.channel.send("I can't find this command:(");
});

client.login(config.DISCORD_TOKEN);
// console.log(config);