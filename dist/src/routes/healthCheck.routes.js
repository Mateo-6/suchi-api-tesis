"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const healthCheck_controller_1 = require("../controller/healthCheck.controller");
const router = (0, express_1.Router)();
router.get('/', healthCheck_controller_1.healthCheck);
exports.default = router;
