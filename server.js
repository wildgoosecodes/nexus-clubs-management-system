const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const connectMongo = require('connect-mongo');
const MongoStore = connectMongo.default || connectMongo;
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const multer = require('multer');
const fs = require('fs');
const PDFDocument = require('pdfkit');
const speakeasy = require('speakeasy');
const QRCode = require('qrcode');
const compression = require('compression');
const helmet = require('helmet');
const app = express();

// Load environment variables from .env if present
require('dotenv').config();
const server = http.createServer(app);
const io = socketIO(server);
const PORT = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';
let globalAssetVersion = String(Date.now());

