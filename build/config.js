"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var DISCORD_TOKEN = process.env.DISCORD_TOKEN;
if (!DISCORD_TOKEN) {
    throw new Error("Missing environment variables");
}
var config = {
    DISCORD_TOKEN: DISCORD_TOKEN
};
exports.default = config;
