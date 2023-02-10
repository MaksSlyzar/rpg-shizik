"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SoundDto = /** @class */ (function () {
    function SoundDto() {
        this.title = "Undefiend title";
        this.likes = -1;
        this.durationInSec = -1;
        this.durationRaw = "";
        this.type = 'null';
        this.url = 'null';
    }
    SoundDto.prototype.youtube = function (video) {
        this.title = video.title ? video.title : this.title;
        this.likes = video.likes;
        this.durationInSec = video.durationInSec;
        this.durationRaw = video.durationRaw;
        this.type = "youtube";
        this.url = video.url;
        return this;
    };
    return SoundDto;
}());
exports.default = SoundDto;
