"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userController_1 = require("../controller/userController");
var express_1 = require("express");
var userControllerObj = new userController_1.userController();
exports.userRoutes = express_1.Router();
console.log("routes user");
exports.userRoutes.post('/register', userControllerObj.registerUser);
exports.userRoutes.post('/login', userControllerObj.login);
