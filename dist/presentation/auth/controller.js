"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutController = void 0;
class AutController {
    constructor() {
        this.registerUser = (req, res) => {
            res.json('registerUser controller');
        };
        this.loginUser = (req, res) => {
            res.json('loginUser controller');
        };
    }
}
exports.AutController = AutController;
