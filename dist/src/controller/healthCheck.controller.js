"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthCheck = void 0;
const healthCheck = (req, res) => {
    return res.json('Welcome to my API');
};
exports.healthCheck = healthCheck;
