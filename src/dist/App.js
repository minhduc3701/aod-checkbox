"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var Toggle_1 = require("aod-dependencies/Toggle");
var icons_1 = require("aod-dependencies/@uifabric/icons");
var AppStyle_1 = require("./AppStyle");
var CustomCheckBox_1 = require("aod-dependencies/Checkbox/CustomCheckBox");
icons_1.initializeIcons();
function App() {
    var _a = react_1["default"].useState(""), darkMode = _a[0], setDarkMode = _a[1];
    var _b = react_1["default"].useState(false), disabled = _b[0], setDisabled = _b[1];
    var _c = react_1["default"].useState(false), indeterminate = _c[0], setIndeterminate = _c[1];
    var onChangeMode = function () {
        if (darkMode === "dark") {
            setDarkMode("light");
        }
        if (darkMode !== "dark") {
            setDarkMode("dark");
        }
    };
    var onChangeDisable = function () {
        setDisabled(!disabled);
    };
    var onChangeIndeterminate = function () {
        setIndeterminate(!indeterminate);
    };
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(AppStyle_1.Wrapper, { theme: darkMode },
            react_1["default"].createElement("div", { className: "toggle-wrapper" },
                react_1["default"].createElement(Toggle_1.Toggle, { label: "Dark mode", onChange: onChangeMode }),
                react_1["default"].createElement(Toggle_1.Toggle, { label: "Disable", onChange: onChangeDisable }),
                react_1["default"].createElement(Toggle_1.Toggle, { label: "Indeterminate", onChange: onChangeIndeterminate })),
            react_1["default"].createElement(CustomCheckBox_1["default"], { label: "Check box", 
                //<CheckBoxDarkMode>
                darkMode: darkMode, 
                //</CheckBoxDarkMode>
                indeterminate: indeterminate, disabled: disabled }))));
}
exports["default"] = App;
