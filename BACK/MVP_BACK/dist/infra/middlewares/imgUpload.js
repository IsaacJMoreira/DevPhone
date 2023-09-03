"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const storage = multer_1.default.diskStorage({
    destination: function (request, file, cb) {
        cb(null, path_1.default.resolve('uploads'));
    },
    filename: function (request, file, cb) {
        cb(null, `${Date.now()}-${file.originalname.toLocaleLowerCase()}`);
    },
});
const upload = (0, multer_1.default)({
    storage: storage,
    fileFilter: function (request, file, cb) {
        extensionCheck(file, cb);
    }
});
function extensionCheck(file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path_1.default.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
        return cb(null, true);
    }
    else {
        return cb(null, false);
    }
}
;
exports.default = upload;
