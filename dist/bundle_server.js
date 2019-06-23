/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bin/www");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ \"./routes/index.js\");\n\n\n //import cookieParser from 'cookie-parser';\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(morgan__WEBPACK_IMPORTED_MODULE_2___default()('dev')); //app.use(express.json());\n\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.urlencoded({\n  extended: false\n})); //app.use(cookieParser());\n\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname, 'public')));\napp.use('/', _routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./bin/www":
/*!*****************!*\
  !*** ./bin/www ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io */ \"socket.io\");\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ \"debug\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app */ \"./app.js\");\n/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../socket */ \"./socket/index.js\");\n\n\n\n\n\n\n\n\nconst debugServer = debug__WEBPACK_IMPORTED_MODULE_2___default()('plant-monitor-server:server');\nconst httpServer = http__WEBPACK_IMPORTED_MODULE_0___default.a.Server(_app__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nconst io = socket_io__WEBPACK_IMPORTED_MODULE_1___default()(httpServer);\nconst port = normalizePort(process.env.PORT || '3000');\n\n_app__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set('port', port);\n\n/**\n * Socket\n */\n\nconst socketConnection = new _socket__WEBPACK_IMPORTED_MODULE_4__[\"default\"](io);\nsocketConnection.connection();\n\n\n/**\n * Create HTTP server.\n */\n\nconst serverCreated = () => {\n  console.log(\"Server running; Socket Ready!\");\n};\n\n/**\n * Listen on provided port, on all network interfaces.\n */\n\nhttpServer.listen(port, serverCreated);\nhttpServer.on('error', onError);\nhttpServer.on('listening', onListening);\n\n/**\n * Normalize a port into a number, string, or false.\n */\n\nfunction normalizePort(val) {\n  var port = parseInt(val, 10);\n\n  if (isNaN(port)) {\n    // named pipe\n    return val;\n  }\n\n  if (port >= 0) {\n    // port number\n    return port;\n  }\n\n  return false;\n};\n\n/**\n * Event listener for HTTP server \"error\" event.\n */\n\nfunction onError(error) {\n  if (error.syscall !== 'listen') {\n    throw error;\n  }\n\n  var bind = typeof port === 'string'\n    ? 'Pipe ' + port\n    : 'Port ' + port;\n\n  // handle specific listen errors with friendly messages\n  switch (error.code) {\n    case 'EACCES':\n      console.error(bind + ' requires elevated privileges');\n      process.exit(1);\n      break;\n    case 'EADDRINUSE':\n      console.error(bind + ' is already in use');\n      process.exit(1);\n      break;\n    default:\n      throw error;\n  }\n}\n\n/**\n * Event listener for HTTP server \"listening\" event.\n */\n\nfunction onListening() {\n  var addr = httpServer.address();\n  var bind = typeof addr === 'string'\n    ? 'pipe ' + addr\n    : 'port ' + addr.port;\n  debugServer('Listening on ' + bind);\n}\n\n\n//# sourceURL=webpack:///./bin/www?");

/***/ }),

/***/ "./config/configdb.json":
/*!******************************!*\
  !*** ./config/configdb.json ***!
  \******************************/
/*! exports provided: development, test, production, default */
/***/ (function(module) {

eval("module.exports = {\"development\":{\"username\":\"postgres\",\"password\":\"object73Fi\",\"database\":\"home_automation\",\"host\":\"127.0.0.1\",\"dialect\":\"postgres\"},\"test\":{\"username\":\"root\",\"password\":null,\"database\":\"database_test\",\"host\":\"127.0.0.1\",\"dialect\":\"mysql\"},\"production\":{\"username\":\"root\",\"password\":null,\"database\":\"database_production\",\"host\":\"127.0.0.1\",\"dialect\":\"mysql\"}};\n\n//# sourceURL=webpack:///./config/configdb.json?");

/***/ }),

/***/ "./controllers/actuatiorActivitiesController/actuatorActivitiesController.js":
/*!***********************************************************************************!*\
  !*** ./controllers/actuatiorActivitiesController/actuatorActivitiesController.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ \"./models/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers */ \"./helpers/index.js\");\n\n\nvar actuator_activity = _models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].actuator_activity;\n\nvar addActuatorActivity = function addActuatorActivity(req, res) {\n  var _req$body = req.body,\n      created_timestamp = _req$body.created_timestamp,\n      name = _req$body.name,\n      actuator_device_id = _req$body.actuator_device_id,\n      sensor_device_id = _req$body.sensor_device_id;\n  var actuatiorActivityData = {\n    created_timestamp: created_timestamp,\n    name: name,\n    actuator_device_id: actuator_device_id,\n    sensor_device_id: sensor_device_id\n  };\n  return actuator_activity.create(actuatiorActivityData).then(function (actuatiorActivityDataSynced) {\n    return res.status(201).send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.addSuccess('Actuator activity', actuatiorActivityDataSynced));\n  })[\"catch\"](function (error) {\n    return res.status(401).send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.addFailure('Actuator activity', error));\n  });\n};\n\nvar getAllActuatorActivities = function getAllActuatorActivities(req, res) {\n  return actuator_activity.findAll().then(function (allActuatorActivities) {\n    return res.status(200).send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.fetchSuccess('Actuator activities', allActuatorActivities));\n  })[\"catch\"](function (error) {\n    return res.status(400).send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.fetchFailure('Actuator activities', error));\n  });\n};\n\nvar actuatorActivitiesController = {\n  addActuatorActivity: addActuatorActivity,\n  getAllActuatorActivities: getAllActuatorActivities\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (actuatorActivitiesController);\n\n//# sourceURL=webpack:///./controllers/actuatiorActivitiesController/actuatorActivitiesController.js?");

/***/ }),

/***/ "./controllers/actuatiorActivitiesController/index.js":
/*!************************************************************!*\
  !*** ./controllers/actuatiorActivitiesController/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actuatorActivitiesController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actuatorActivitiesController */ \"./controllers/actuatiorActivitiesController/actuatorActivitiesController.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_actuatorActivitiesController__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./controllers/actuatiorActivitiesController/index.js?");

/***/ }),

/***/ "./controllers/devicesController/devicesController.js":
/*!************************************************************!*\
  !*** ./controllers/devicesController/devicesController.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ \"./models/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers */ \"./helpers/index.js\");\n\n\nvar device = _models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].device,\n    sensor_data = _models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sensor_data,\n    actuator_activity = _models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].actuator_activity;\n\nvar addDevice = function addDevice(req, res) {\n  var _req$body = req.body,\n      name = _req$body.name,\n      role = _req$body.role,\n      type = _req$body.type,\n      io_pin = _req$body.io_pin,\n      added_timestamp = _req$body.added_timestamp,\n      min_value = _req$body.min_value,\n      max_value = _req$body.max_value;\n  var deviceData = {\n    name: name,\n    role: role,\n    type: type,\n    io_pin: io_pin,\n    added_timestamp: added_timestamp,\n    min_value: min_value,\n    max_value: max_value\n  };\n  return device.create(deviceData).then(function (deviceDataSynced) {\n    return res.status(201).send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.addSuccess('Device', deviceDataSynced));\n  })[\"catch\"](function (error) {\n    return res.status(401).send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.addFailure('Device', error));\n  });\n};\n\nvar getAllDevices = function getAllDevices(req, res) {\n  return device.findAll().then(function (allDevices) {\n    return res.status(200).send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.fetchSuccess('Device', allDevices));\n  })[\"catch\"](function (error) {\n    return res.status(400).send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.fetchFailure('Device', error));\n  });\n};\n\nvar updateDevice = function updateDevice(req, res) {\n  var deviceIdToUpdate = req.params.deviceId;\n  return device.findByPk(deviceIdToUpdate).then(function (targetDevice) {\n    targetDevice.update(req.body, {\n      fields: Object.keys(req.body)\n    }).then(function (deviceDataUpdated) {\n      return res.status(200).send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.updateSuccess('Device', deviceDataUpdated));\n    })[\"catch\"](function (error) {\n      return res.status(400).send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.updateFailure('Device', error));\n    });\n  })[\"catch\"](function (error) {\n    return res.status(400).send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.updateFailure('Device', error));\n  });\n};\n\nvar deleteDevice = function deleteDevice(req, res) {\n  var deviceIdToUpdate = req.params.deviceId;\n  return device.findByPk(deviceIdToUpdate).then(function (targetDevice) {\n    targetDevice.destroy().then(function () {\n      return res.status(200).send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.deleteSuccess('Device'));\n    })[\"catch\"](function (error) {\n      return res.status(400).send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.deleteFailure('Device', error));\n    });\n  })[\"catch\"](function (error) {\n    return res.status(400).send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.deleteFailure('Device', error));\n  });\n};\n\nvar devicesController = {\n  addDevice: addDevice,\n  getAllDevices: getAllDevices,\n  updateDevice: updateDevice,\n  deleteDevice: deleteDevice\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (devicesController);\n\n//# sourceURL=webpack:///./controllers/devicesController/devicesController.js?");

/***/ }),

/***/ "./controllers/devicesController/index.js":
/*!************************************************!*\
  !*** ./controllers/devicesController/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _devicesController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./devicesController */ \"./controllers/devicesController/devicesController.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_devicesController__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./controllers/devicesController/index.js?");

/***/ }),

/***/ "./controllers/index.js":
/*!******************************!*\
  !*** ./controllers/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actuatiorActivitiesController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actuatiorActivitiesController */ \"./controllers/actuatiorActivitiesController/index.js\");\n/* harmony import */ var _devicesController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./devicesController */ \"./controllers/devicesController/index.js\");\n/* harmony import */ var _sensorDataController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sensorDataController */ \"./controllers/sensorDataController/index.js\");\n\n\n\nvar controllers = {\n  actuatorActivitiesController: _actuatiorActivitiesController__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  devicesController: _devicesController__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  sensorDataController: _sensorDataController__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (controllers);\n\n//# sourceURL=webpack:///./controllers/index.js?");

/***/ }),

/***/ "./controllers/sensorDataController/index.js":
/*!***************************************************!*\
  !*** ./controllers/sensorDataController/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sensorDataController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sensorDataController */ \"./controllers/sensorDataController/sensorDataController.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_sensorDataController__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./controllers/sensorDataController/index.js?");

/***/ }),

/***/ "./controllers/sensorDataController/sensorDataController.js":
/*!******************************************************************!*\
  !*** ./controllers/sensorDataController/sensorDataController.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ \"./models/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers */ \"./helpers/index.js\");\n\n\nvar sensor_data = _models__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sensor_data;\n\nvar addSensorData = function addSensorData(req, res) {\n  var _req$body = req.body,\n      sensor_device_id = _req$body.sensor_device_id,\n      created_timestamp = _req$body.created_timestamp,\n      sensor_value = _req$body.sensor_value;\n  var sensorData = {\n    sensor_device_id: sensor_device_id,\n    created_timestamp: created_timestamp,\n    sensor_value: sensor_value\n  };\n  return sensor_data.create(sensorData).then(function (sensorDataSynced) {\n    return afterCreateSuccess(sensorDataSynced, res);\n  })[\"catch\"](function (error) {\n    return res.status(401).send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.addFailure('Sensor data', error));\n  });\n};\n\nvar afterCreateSuccess = function afterCreateSuccess(sensorDataSynced, res) {\n  var updaterSocket = _helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].socketHelpers.connect();\n  _helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].socketHelpers.fireEvent(updaterSocket, 'newSensorData', sensorDataSynced, true);\n  return res.status(201).send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.addSuccess('Sensor data', sensorDataSynced));\n};\n\nvar getAllSensorData = function getAllSensorData(req, res) {\n  return sensor_data.findAll().then(function (allSensorData) {\n    return res.status(200).send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.fetchSuccess('Sensor data', allSensorData));\n  })[\"catch\"](function (error) {\n    return res.status(400).send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.fetchFailure('Sensor data', error));\n  });\n};\n\nvar sensorDataController = {\n  addSensorData: addSensorData,\n  getAllSensorData: getAllSensorData\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (sensorDataController);\n\n//# sourceURL=webpack:///./controllers/sensorDataController/sensorDataController.js?");

/***/ }),

/***/ "./helpers/index.js":
/*!**************************!*\
  !*** ./helpers/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _responseHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./responseHelpers */ \"./helpers/responseHelpers.js\");\n/* harmony import */ var _socketHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socketHelpers */ \"./helpers/socketHelpers.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  responseHelpers: _responseHelpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  socketHelpers: _socketHelpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n//# sourceURL=webpack:///./helpers/index.js?");

/***/ }),

/***/ "./helpers/responseHelpers.js":
/*!************************************!*\
  !*** ./helpers/responseHelpers.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar addSuccess = function addSuccess(contextName, syncedData) {\n  return {\n    success: true,\n    message: \"\".concat(contextName, \" successfully added\"),\n    data: syncedData\n  };\n};\n\nvar addFailure = function addFailure(contextName, error) {\n  return {\n    success: false,\n    message: \"\".concat(contextName, \" failed to add\"),\n    error: error\n  };\n};\n\nvar fetchSuccess = function fetchSuccess(contextName, syncedData) {\n  return {\n    success: true,\n    message: \"\".concat(contextName, \" successfully fetched\"),\n    data: syncedData\n  };\n};\n\nvar fetchFailure = function fetchFailure(contextName, error) {\n  return {\n    success: false,\n    message: \"\".concat(contextName, \" failed to fetch\"),\n    error: error\n  };\n};\n\nvar updateSuccess = function updateSuccess(contextName, syncedData) {\n  return {\n    success: true,\n    message: \"\".concat(contextName, \" successfully updated\"),\n    data: syncedData\n  };\n};\n\nvar updateFailure = function updateFailure(contextName, error) {\n  return {\n    success: false,\n    message: \"\".concat(contextName, \" failed to update\"),\n    error: error\n  };\n};\n\nvar deleteSuccess = function deleteSuccess(contextName) {\n  return {\n    success: true,\n    message: \"\".concat(contextName, \" successfully updated\")\n  };\n};\n\nvar deleteFailure = function deleteFailure(contextName, error) {\n  return {\n    success: false,\n    message: \"\".concat(contextName, \" failed to delete\"),\n    error: error\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  addSuccess: addSuccess,\n  addFailure: addFailure,\n  fetchSuccess: fetchSuccess,\n  fetchFailure: fetchFailure,\n  updateSuccess: updateSuccess,\n  updateFailure: updateFailure,\n  deleteSuccess: deleteSuccess,\n  deleteFailure: deleteFailure\n});\n\n//# sourceURL=webpack:///./helpers/responseHelpers.js?");

/***/ }),

/***/ "./helpers/socketHelpers.js":
/*!**********************************!*\
  !*** ./helpers/socketHelpers.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar connect = function connect() {\n  var socketServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'http://localhost:3000';\n  return socket_io_client__WEBPACK_IMPORTED_MODULE_0___default()(socketServer);\n};\n\nvar fireEvent = function fireEvent(socket, name, data, disconnectAfterTransmission) {\n  var disconnectSocket = disconnectAfterTransmission ? socket.disconnect : undefined;\n  socket.emit(name, {\n    data: data\n  }, disconnectSocket);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  connect: connect,\n  fireEvent: fireEvent\n});\n\n//# sourceURL=webpack:///./helpers/socketHelpers.js?");

/***/ }),

/***/ "./models/index.js":
/*!*************************!*\
  !*** ./models/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_configdb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/configdb */ \"./config/configdb.json\");\nvar _config_configdb__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config/configdb */ \"./config/configdb.json\", 1);\n //const fs = require('fs');\n\n //const path = require('path');\n\n //const Sequelize = require('sequelize');\n\n\nvar basename = path__WEBPACK_IMPORTED_MODULE_1___default.a.basename(__filename);\nvar env = \"development\" || false;\n\nvar config = _config_configdb__WEBPACK_IMPORTED_MODULE_3__[env];\nvar db = {};\nvar sequelize;\n\nif (config.use_env_variable) {\n  sequelize = new sequelize__WEBPACK_IMPORTED_MODULE_2___default.a(process.env[config.use_env_variable], config);\n} else {\n  sequelize = new sequelize__WEBPACK_IMPORTED_MODULE_2___default.a(config.database, config.username, config.password, config);\n}\n\nfs__WEBPACK_IMPORTED_MODULE_0___default.a.readdirSync(__dirname + '/../models/').filter(function (file) {\n  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';\n}).forEach(function (file) {\n  var model = sequelize['import'](path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname, '/../models/', file));\n  db[model.name] = model;\n});\nObject.keys(db).forEach(function (modelName) {\n  if (db[modelName].associate) {\n    db[modelName].associate(db);\n  }\n});\ndb.sequelize = sequelize;\ndb.Sequelize = sequelize__WEBPACK_IMPORTED_MODULE_2___default.a; //module.exports = db;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (db);\n/* WEBPACK VAR INJECTION */}.call(this, \"/index.js\"))\n\n//# sourceURL=webpack:///./models/index.js?");

/***/ }),

/***/ "./routes/api/index.js":
/*!*****************************!*\
  !*** ./routes/api/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _v1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v1 */ \"./routes/api/v1/index.js\");\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.use('/v1', _v1__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/index.js?");

/***/ }),

/***/ "./routes/api/v1/actuatorActivities/actuatorActivitiesCollection.js":
/*!**************************************************************************!*\
  !*** ./routes/api/v1/actuatorActivities/actuatorActivitiesCollection.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../controllers */ \"./controllers/index.js\");\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.get('/', _controllers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].actuatorActivitiesController.getAllActuatorActivities);\nrouter.post('/', _controllers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].actuatorActivitiesController.addActuatorActivity);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/v1/actuatorActivities/actuatorActivitiesCollection.js?");

/***/ }),

/***/ "./routes/api/v1/actuatorActivities/index.js":
/*!***************************************************!*\
  !*** ./routes/api/v1/actuatorActivities/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actuatorActivitiesCollection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actuatorActivitiesCollection */ \"./routes/api/v1/actuatorActivities/actuatorActivitiesCollection.js\");\n //import activities from './activities';\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.use('/', _actuatorActivitiesCollection__WEBPACK_IMPORTED_MODULE_1__[\"default\"]); //router.use('/:deviceRole', activities);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/v1/actuatorActivities/index.js?");

/***/ }),

/***/ "./routes/api/v1/devices/devices.js":
/*!******************************************!*\
  !*** ./routes/api/v1/devices/devices.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../controllers */ \"./controllers/index.js\");\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.put('/:deviceId', _controllers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].devicesController.updateDevice);\nrouter[\"delete\"]('/:deviceId', _controllers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].devicesController.deleteDevice);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/v1/devices/devices.js?");

/***/ }),

/***/ "./routes/api/v1/devices/devicesCollection.js":
/*!****************************************************!*\
  !*** ./routes/api/v1/devices/devicesCollection.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../controllers */ \"./controllers/index.js\");\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.get('/', _controllers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].devicesController.getAllDevices);\nrouter.post('/', _controllers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].devicesController.addDevice);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/v1/devices/devicesCollection.js?");

/***/ }),

/***/ "./routes/api/v1/devices/index.js":
/*!****************************************!*\
  !*** ./routes/api/v1/devices/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./devices */ \"./routes/api/v1/devices/devices.js\");\n/* harmony import */ var _devicesCollection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./devicesCollection */ \"./routes/api/v1/devices/devicesCollection.js\");\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.use('/', _devicesCollection__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nrouter.use('/', _devices__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/v1/devices/index.js?");

/***/ }),

/***/ "./routes/api/v1/index.js":
/*!********************************!*\
  !*** ./routes/api/v1/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actuatorActivities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actuatorActivities */ \"./routes/api/v1/actuatorActivities/index.js\");\n/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./devices */ \"./routes/api/v1/devices/index.js\");\n/* harmony import */ var _sensorData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sensorData */ \"./routes/api/v1/sensorData/index.js\");\n\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.use('/actuatorActivities', _actuatorActivities__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nrouter.use('/devices', _devices__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nrouter.use('/sensorData', _sensorData__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/v1/index.js?");

/***/ }),

/***/ "./routes/api/v1/sensorData/index.js":
/*!*******************************************!*\
  !*** ./routes/api/v1/sensorData/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sensorDataCollection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sensorDataCollection */ \"./routes/api/v1/sensorData/sensorDataCollection.js\");\n //import sensorData from './sensorData';\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.use('/', _sensorDataCollection__WEBPACK_IMPORTED_MODULE_1__[\"default\"]); //router.use('/:deviceRole', activities);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/v1/sensorData/index.js?");

/***/ }),

/***/ "./routes/api/v1/sensorData/sensorDataCollection.js":
/*!**********************************************************!*\
  !*** ./routes/api/v1/sensorData/sensorDataCollection.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../controllers */ \"./controllers/index.js\");\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.get('/', _controllers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sensorDataController.getAllSensorData);\nrouter.post('/', _controllers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sensorDataController.addSensorData);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/v1/sensorData/sensorDataCollection.js?");

/***/ }),

/***/ "./routes/index.js":
/*!*************************!*\
  !*** ./routes/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./routes/api/index.js\");\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.use('/api', _api__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/index.js?");

/***/ }),

/***/ "./socket/index.js":
/*!*************************!*\
  !*** ./socket/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar socketServer = function socketServer(io) {\n  var _this = this;\n\n  _classCallCheck(this, socketServer);\n\n  _defineProperty(this, \"onNewSensorData\", function (data, nextTask) {\n    _this.io.emit('newSensorDataForClient', data);\n\n    if (nextTask) nextTask();\n  });\n\n  _defineProperty(this, \"onDisconnect\", function () {\n    console.log('DISCONECTED');\n  });\n\n  _defineProperty(this, \"afterSocketConnection\", function (socket) {\n    socket.on('newSensorData', _this.onNewSensorData);\n    socket.on('disconnect', _this.onDisconnect);\n  });\n\n  _defineProperty(this, \"connection\", function () {\n    _this.io.on('connection', _this.afterSocketConnection);\n  });\n\n  this.io = io;\n};\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (socketServer);\n\n//# sourceURL=webpack:///./socket/index.js?");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"debug\");\n\n//# sourceURL=webpack:///external_%22debug%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sequelize\");\n\n//# sourceURL=webpack:///external_%22sequelize%22?");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io\");\n\n//# sourceURL=webpack:///external_%22socket.io%22?");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io-client\");\n\n//# sourceURL=webpack:///external_%22socket.io-client%22?");

/***/ })

/******/ });