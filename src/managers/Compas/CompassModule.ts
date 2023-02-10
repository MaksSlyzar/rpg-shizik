import { Message, TextChannel, User } from "discord.js";

class CompassModule {
    user: User;
    channel: TextChannel;
    message: Message;

    constructor (user: User, channel: TextChannel, message: Message) {
        this.user = user;
        this.channel = channel;
        this.message = message;
    }
}

export default CompassModule;