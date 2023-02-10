import { AwaitReactionsOptions, Embed, EmbedBuilder, Message, MessageActionRowComponent, MessageReaction, ReactionCollector, ReactionEmoji, TextChannel, User } from "discord.js";
import CompassModule from "./CompassModule";

class CompassManager extends CompassModule {
    constructor (user: User, channel: TextChannel) {
        super(user, channel);

        this.generateMessage();
    }

    embedMessage () {
        return new EmbedBuilder()
                                .setTitle("Compass <🧭>")
                                .setDescription(`**(📙)** to **Collection**!`)
                                // .setAuthor({ name: `${this.user.username}#${this.user.discriminator}`})
                                .setColor("#2F3136");

    }

    async generateMessage (message: Message) {
        const embed = this.embedMessage();
        
        this.message = await this.channel.send({embeds: [embed]});

        await this.message.react("📙");
        
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
            return ["📙"].includes(reaction.emoji.name) && user.id === this.user.id;
        };

        const collector = this.message.createReactionCollector({ filter: filter, time: 15000 });

        collector.on("collect", (reaction, user) => {
            console.log(reaction);
        });
    }
}

export default CompassManager;