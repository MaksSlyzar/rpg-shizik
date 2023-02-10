"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
var config_1 = __importDefault(require("./config"));
var discord_js_1 = require("discord.js");
var GuildManager_1 = __importDefault(require("./managers/GuildManager"));
var CompasManager_1 = __importDefault(require("./managers/Compas/CompasManager"));
exports.client = new discord_js_1.Client({ intents: ["Guilds",
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
        "GuildScheduledEvents"] });
var guildManagers = [];
exports.client.once("ready", function () {
    console.log("Runned chupapi bot!");
    exports.client.guilds.cache.map(function (guild) {
        var guildManager = new GuildManager_1.default(guild);
        guildManagers.push(guildManager);
    });
});
exports.client.on("messageReactionAdd", function (reaction) {
    // console.log(reaction)
});
exports.client.on("messageCreate", function (message) { return __awaiter(void 0, void 0, void 0, function () {
    var compas, commandName, guildId, guildManager, _i, guildManagers_1, value;
    return __generator(this, function (_a) {
        if (message.author.bot == true)
            return [2 /*return*/];
        compas = new CompasManager_1.default(message.author, message.channel);
        // const mainGuild = client.guilds.cache.find(g => g.id == "762420182047260703")?.emojis;
        // const emojies = mainGuild?.cache.map(em => em)
        if (message.content[0] != "!")
            return [2 /*return*/];
        commandName = message.content.split(" ")[0].slice(1);
        guildId = message.guildId;
        for (_i = 0, guildManagers_1 = guildManagers; _i < guildManagers_1.length; _i++) {
            value = guildManagers_1[_i];
            if (value.guild.id == guildId)
                guildManager = value;
        }
        // if (guildManager == undefined)
        //     return message.channel.send("This guild is not in my datebase. I am sorry:(");
        if (guildManager == undefined) {
            message.channel.send("This guild is not in my datebase. I am sorry:(");
            return [2 /*return*/];
        }
        // for (const command of commands) {
        //     if (command.name == commandName)
        //         return await command.execute(message, client, guildManager);
        // }
        message.channel.send("I can't find this command:(");
        return [2 /*return*/];
    });
}); });
exports.client.login(config_1.default.DISCORD_TOKEN);
// console.log(config);
