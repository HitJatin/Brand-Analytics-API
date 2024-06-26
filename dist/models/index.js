"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const mysql = __importStar(require("mysql2"));
const Brand_1 = __importDefault(require("./Brand"));
const Product_1 = __importDefault(require("./Product"));
const dbName = process.env.DB_NAME || 'your_database_name';
const dbUser = process.env.DB_USER || 'your_database_username';
const dbHost = process.env.DB_HOST || 'localhost';
const dbPassword = process.env.DB_PASSWORD || 'your_database_password';
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'mysql',
    dialectModule: mysql,
    host: dbHost,
    username: dbUser,
    password: dbPassword,
    database: dbName,
    port: 3306,
    models: [Brand_1.default, Product_1.default]
});
// sequelize.sync({ alter: true });  // Use cautiously
exports.default = sequelize;
