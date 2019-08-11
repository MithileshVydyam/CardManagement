"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cardRoutes_1 = require("../routes/cardRoutes");
var UserRoutes_1 = require("../routes/UserRoutes");
var authenticate_1 = require("../middleware/authenticate");
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.configRoutes = function (app) {
        app.get('/', function (req, res) {
            res.status(200).json({ "Success": "Server is running" });
        });
        app.use('/api/user', UserRoutes_1.userRoutes);
        app.use(authenticate_1.AuthenticateService.authenticate);
        app.use('/api/card', cardRoutes_1.cardRoutes);
    };
    return Routes;
}());
exports.Routes = Routes;
