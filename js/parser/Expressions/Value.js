"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Value = void 0;
var Expresion_1 = require("../Structure/Abstract/Expresion");
/**
 * @class use this class for save all value
 */
var Value = /** @class */ (function (_super) {
    __extends(Value, _super);
    /**
     *
     * @param type - Type
     * @param value - Object
     *
     */
    function Value(type, value) {
        var _this = _super.call(this) || this;
        if (value instanceof Array) {
            _this.esArray = true;
            _this.valueArray = value;
            _this.type = type;
            _this.value = null;
        }
        else {
            _this.esArray = false;
            _this.valueArray = [];
            _this.type = type;
            _this.value = value;
        }
        return _this;
    }
    Value.prototype.getValue = function (e) {
        if (this.esArray) {
            return new Value(this.type, this.valueArray);
        }
        else {
            return new Value(this.type, this.value);
        }
    };
    return Value;
}(Expresion_1.Expresion));
exports.Value = Value;
