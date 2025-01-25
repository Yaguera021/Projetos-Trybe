"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mapStatusHTTP(type) {
    const statusHTTPMap = {
        INVALID_DATA: 400,
        NOT_FOUND: 404,
        CREATED: 201,
        SUCCESSFUL: 200,
        UNAUTHORIZED: 401,
    };
    return statusHTTPMap[type];
}
exports.default = mapStatusHTTP;
