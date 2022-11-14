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
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../server/app");
// Models
require("./models/CodigoQR");
require("./models/Item_Orden");
require("./models/Item");
require("./models/Mesa");
require("./models/Notificacion");
require("./models/Orden");
require("./models/Persona");
require("./models/Restaurante");
require("./models/Sede");
require("./models/Usuario");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    // await db.sync({ force: true });
    // console.log('conexion Authentication');
    const app = new app_1.App(3000);
    app.listen();
});
main();
