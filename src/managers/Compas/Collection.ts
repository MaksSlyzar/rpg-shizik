import { AwaitReactionsOptions, Embed, EmbedBuilder, Message, MessageActionRowComponent, MessageActivityType, MessageReaction, ReactionCollector, ReactionEmoji, TextChannel, User } from "discord.js";
import CompassModule from "./CompassModule";

class Collection extends CompassModule {
    constructor (user: User, channel: TextChannel, history: Array<CompassModule>, index: number, message?: Message) {
        super(user, channel, history, index, message);

        console.log(history, "history")


        if (index > history.length)
            history.push(this);
        
        if (!message)
            channel.send("Generating message, wait please:)").then(message => {
                this.message = message;
                this.generateMessage();
            });
        else
            this.generateMessage();
    }

    embedMessage () {
        return new EmbedBuilder()
                                .setTitle("Collection <📙>")
                                .setDescription(`Levels!!!`)
                                // .setAuthor({ name: `${this.user.username}#${this.user.discriminator}`})
                                .setColor("#2F3136");

    }

    async generateMessage () {
        const embed = this.embedMessage();
        
        // await this.message.edit("_");
        await this.message.edit({embeds: [embed], content: ""});


        const emojies = ["⬅️", "➡️", "🏹"]
        emojies.map(async emoji => { await this.message.react(emoji) });
        
        this.setupCollector();

        // this.message.awaitReactions({ filter: () => false, max: 10, errors: ["time"], time: 10000 }).then(collected => {
        //     console.log(collected)
        //     this.channel.send("sadads")
        // }).catch(error => console.log(error));
    }

    async regenerateMessage () {
        this.message.edit({ embeds: [this.embedMessage()] })
    }

    setupCollector () {
        const filter = (reaction: MessageReaction, user: User) => {
            return ["⬅️", "➡️", "🏹"].includes(reaction.emoji.name) && user.id === this.user.id;
        };

        const collector = this.message.createReactionCollector({ filter: filter, time: 15000 });

        collector.on("collect", (reaction, user) => {
            switch (reaction.emoji.name) {
                case "⬅️":
                    this.backHistory();
                    this.message.reactions.removeAll();
                break;
            }
        });
    }
}

export default Collection;