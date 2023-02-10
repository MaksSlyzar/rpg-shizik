"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Collection = /** @class */ (function () {
    function Collection(manager) {
        this.manager = manager;
    }
    Collection.prototype.regenerateMessage = function () {
        var _a = this.manager, message = _a.message, user = _a.user;
    };
    return Collection;
}());
exports.default = Collection;
