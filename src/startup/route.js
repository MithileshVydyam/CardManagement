"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.configRoutes = function (app) {
        app.get('/', function (req, res) {
            res.status(200).json({ "Success": "Server is running" });
        });
    };
    return Routes;
}());
exports.Routes = Routes;
