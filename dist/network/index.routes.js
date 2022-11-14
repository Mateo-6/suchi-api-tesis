"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Routes
const healthCheck_routes_1 = __importDefault(require("../src/routes/healthCheck.routes"));
exports.default = (app) => {
    app.use('/healthcheck', healthCheck_routes_1.default);
};
