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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ \"./routes/index.js\");\n\n\n\n//import cookieParser from 'cookie-parser';\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n\napp.use(morgan__WEBPACK_IMPORTED_MODULE_2___default()('dev'));\n//app.use(express.json());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.urlencoded({ extended: false }));\n//app.use(cookieParser());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname, 'public')));\n\napp.use('/', _routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./bin/www":
/*!*****************!*\
  !*** ./bin/www ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io */ \"socket.io\");\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ \"debug\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app */ \"./app.js\");\n\n\n\n\n\n\n\nconst debugServer = debug__WEBPACK_IMPORTED_MODULE_2___default()('plant-monitor-server:server');\nconst httpServer = http__WEBPACK_IMPORTED_MODULE_0___default.a.Server(_app__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nconst io = socket_io__WEBPACK_IMPORTED_MODULE_1___default()(httpServer);\nconst port = normalizePort(process.env.PORT || '3000');\n_app__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set('port', port);\n\n/**\n * Create Socket\n */\n\nio.on('connection', function(socket){\n  console.log('an user connected');\n  socket.emit('data', {what: 'data'})\n});\n\n/**\n * Create HTTP server.\n */\n\nconst serverCreated = () => {\n  console.log(\"Server running; Socket Ready!\");\n};\n\n/**\n * Listen on provided port, on all network interfaces.\n */\n\nhttpServer.listen(port, serverCreated);\nhttpServer.on('error', onError);\nhttpServer.on('listening', onListening);\n\n/**\n * Normalize a port into a number, string, or false.\n */\n\nfunction normalizePort(val) {\n  var port = parseInt(val, 10);\n\n  if (isNaN(port)) {\n    // named pipe\n    return val;\n  }\n\n  if (port >= 0) {\n    // port number\n    return port;\n  }\n\n  return false;\n}\n\n/**\n * Event listener for HTTP server \"error\" event.\n */\n\nfunction onError(error) {\n  if (error.syscall !== 'listen') {\n    throw error;\n  }\n\n  var bind = typeof port === 'string'\n    ? 'Pipe ' + port\n    : 'Port ' + port;\n\n  // handle specific listen errors with friendly messages\n  switch (error.code) {\n    case 'EACCES':\n      console.error(bind + ' requires elevated privileges');\n      process.exit(1);\n      break;\n    case 'EADDRINUSE':\n      console.error(bind + ' is already in use');\n      process.exit(1);\n      break;\n    default:\n      throw error;\n  }\n}\n\n/**\n * Event listener for HTTP server \"listening\" event.\n */\n\nfunction onListening() {\n  var addr = httpServer.address();\n  var bind = typeof addr === 'string'\n    ? 'pipe ' + addr\n    : 'port ' + addr.port;\n  debugServer('Listening on ' + bind);\n}\n\n\n//# sourceURL=webpack:///./bin/www?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ \"./models/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers */ \"./helpers/index.js\");\n\n\nconst { actuator_activity } = _models__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n\nconst addActuatorActivity = (req, res) => {\n  console.log('actuatorActivitiesController')\n\n  const {\n    created_timestamp,\n    name,\n    actuator_device_id,\n    sensor_device_id,\n  } = req.body\n\n  const actuatiorActivityData = {\n    created_timestamp,\n    name,\n    actuator_device_id,\n    sensor_device_id,\n  }\n\n  return actuator_activity.create(actuatiorActivityData)\n                          .then(actuatiorActivityDataSynced =>\n                            res.status(201)\n                            .send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.addSuccess('Actuator activity', actuatiorActivityDataSynced))\n                          ).catch(error =>\n                            res.status(401)\n                            .send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.addFailure('Actuator activity', error))\n                          );\n};\n\nconst getAllActuatorActivities = (req, res) => {\n  return actuator_activity.findAll()\n                          .then(allActuatorActivities =>\n                            res.status(200)\n                            .send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.fetchSuccess('Actuator activities', allActuatorActivities))\n                          ).catch(error =>\n                            res.status(400)\n                            .send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.fetchFailure('Actuator activities', error))\n                          );\n};\n\nconst actuatorActivitiesController = {\n  addActuatorActivity,\n  getAllActuatorActivities,\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (actuatorActivitiesController);\n\n//# sourceURL=webpack:///./controllers/actuatiorActivitiesController/actuatorActivitiesController.js?");

/***/ }),

/***/ "./controllers/actuatiorActivitiesController/index.js":
/*!************************************************************!*\
  !*** ./controllers/actuatiorActivitiesController/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actuatorActivitiesController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actuatorActivitiesController */ \"./controllers/actuatiorActivitiesController/actuatorActivitiesController.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_actuatorActivitiesController__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./controllers/actuatiorActivitiesController/index.js?");

/***/ }),

/***/ "./controllers/devicesController/devicesController.js":
/*!************************************************************!*\
  !*** ./controllers/devicesController/devicesController.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ \"./models/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers */ \"./helpers/index.js\");\n\n\nconst { device, sensor_data, actuator_activity } = _models__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n\nconst addDevice = (req, res) => {\n  const {\n    name,\n    role,\n    type,\n    io_pin,\n    added_timestamp,\n    min_value,\n    max_value,\n  } = req.body;\n\n  const deviceData = {\n    name,\n    role,\n    type,\n    io_pin,\n    added_timestamp,\n    min_value,\n    max_value,\n  }\n\n  return device.create(deviceData)\n               .then(deviceDataSynced =>\n                 res.status(201)\n                 .send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.addSuccess('Device', deviceDataSynced))\n               ).catch(error =>\n                res.status(401)\n                .send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.addFailure('Device', error))\n               );\n};\n\nconst getAllDevices = (req, res) => {\n  return device.findAll()\n               .then(allDevices =>\n                 res.status(200)\n                 .send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.fetchSuccess('Device', allDevices))\n               ).catch(error =>\n                 res.status(400)\n                 .send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.fetchFailure('Device', error))\n               );\n};\n\nconst updateDevice = (req, res) => {\n  const deviceIdToUpdate = req.params.deviceId\n\n  return device.findByPk(deviceIdToUpdate)\n               .then(targetDevice => {\n                 targetDevice.update(req.body, { fields: Object.keys(req.body) })\n                 .then(deviceDataUpdated =>\n                   res.status(200)\n                   .send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.updateSuccess('Device', deviceDataUpdated))\n                 ).catch(error =>\n                   res.status(400)\n                   .send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.updateFailure('Device', error))\n                 )\n               })\n               .catch(error =>\n                 res.status(400)\n                 .send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.updateFailure('Device', error))\n               );\n};\n\nconst deleteDevice = (req, res) => {\n  const deviceIdToUpdate = req.params.deviceId\n\n  return device.findByPk(deviceIdToUpdate)\n               .then(targetDevice => {\n                 targetDevice.destroy()\n                 .then(() =>\n                   res.status(200)\n                   .send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.deleteSuccess('Device'))\n                 ).catch(error =>\n                   res.status(400)\n                   .send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.deleteFailure('Device', error))\n                 )\n               })\n               .catch(error =>\n                 res.status(400)\n                 .send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.deleteFailure('Device', error))\n               );\n}\n\nconst devicesController = {\n  addDevice,\n  getAllDevices,\n  updateDevice,\n  deleteDevice,\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (devicesController);\n\n//# sourceURL=webpack:///./controllers/devicesController/devicesController.js?");

/***/ }),

/***/ "./controllers/devicesController/index.js":
/*!************************************************!*\
  !*** ./controllers/devicesController/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _devicesController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./devicesController */ \"./controllers/devicesController/devicesController.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_devicesController__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./controllers/devicesController/index.js?");

/***/ }),

/***/ "./controllers/index.js":
/*!******************************!*\
  !*** ./controllers/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actuatiorActivitiesController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actuatiorActivitiesController */ \"./controllers/actuatiorActivitiesController/index.js\");\n/* harmony import */ var _devicesController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./devicesController */ \"./controllers/devicesController/index.js\");\n/* harmony import */ var _sensorDataController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sensorDataController */ \"./controllers/sensorDataController/index.js\");\n\n\n\n\n\nconst controllers = {\n  actuatorActivitiesController: _actuatiorActivitiesController__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  devicesController: _devicesController__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  sensorDataController: _sensorDataController__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (controllers);\n\n//# sourceURL=webpack:///./controllers/index.js?");

/***/ }),

/***/ "./controllers/sensorDataController/index.js":
/*!***************************************************!*\
  !*** ./controllers/sensorDataController/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sensorDataController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sensorDataController */ \"./controllers/sensorDataController/sensorDataController.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_sensorDataController__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./controllers/sensorDataController/index.js?");

/***/ }),

/***/ "./controllers/sensorDataController/sensorDataController.js":
/*!******************************************************************!*\
  !*** ./controllers/sensorDataController/sensorDataController.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ \"./models/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers */ \"./helpers/index.js\");\n\n\nconst { sensor_data } = _models__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n\nconst addSensorData = (req, res) => {\n  console.log('sensorDataController')\n\n  const {\n    sensor_device_id,\n    created_timestamp,\n    sensor_value,\n  } = req.body\n\n  const sensorData = {\n    sensor_device_id,\n    created_timestamp,\n    sensor_value,\n  }\n\n  return sensor_data.create(sensorData)\n                    .then(sensorDataSynced =>\n                      res.status(201)\n                      .send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.addSuccess('Sensor data', sensorDataSynced))\n                    ).catch(error =>\n                      res.status(401)\n                      .send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.addFailure('Sensor data', error))\n                    );\n};\n\nconst getAllSensorData = (req, res) => {\n  return sensor_data.findAll()\n                    .then(allSensorData =>\n                      res.status(200)\n                      .send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.fetchSuccess('Sensor data', allSensorData))\n                    ).catch(error =>\n                      res.status(400)\n                      .send(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].responseHelpers.fetchFailure('Sensor data', error))\n                    );\n};\n\nconst sensorDataController = {\n  addSensorData,\n  getAllSensorData,\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sensorDataController);\n\n//# sourceURL=webpack:///./controllers/sensorDataController/sensorDataController.js?");

/***/ }),

/***/ "./helpers/index.js":
/*!**************************!*\
  !*** ./helpers/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _responseHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./responseHelpers */ \"./helpers/responseHelpers.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  responseHelpers: _responseHelpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n});\n\n//# sourceURL=webpack:///./helpers/index.js?");

/***/ }),

/***/ "./helpers/responseHelpers.js":
/*!************************************!*\
  !*** ./helpers/responseHelpers.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst addSuccess = (contextName, syncedData) => {\n  return {\n    success: true,\n    message: `${contextName} successfully added`,\n    data: syncedData,\n  }\n}\n\nconst addFailure = (contextName, error) => {\n  return {\n    success: false,\n    message: `${contextName} failed to add`,\n    error,\n  }\n}\n\nconst fetchSuccess = (contextName, syncedData) => {\n  return {\n    success: true,\n    message: `${contextName} successfully fetched`,\n    data: syncedData,\n  }\n}\n\nconst fetchFailure = (contextName, error) => {\n  return {\n    success: false,\n    message: `${contextName} failed to fetch`,\n    error,\n  }\n}\n\nconst updateSuccess = (contextName, syncedData) => {\n  return {\n    success: true,\n    message: `${contextName} successfully updated`,\n    data: syncedData,\n  }\n}\n\nconst updateFailure = (contextName, error) => {\n  return {\n    success: false,\n    message: `${contextName} failed to update`,\n    error,\n  }\n}\n\nconst deleteSuccess = (contextName) => {\n  return {\n    success: true,\n    message: `${contextName} successfully updated`,\n  }\n}\n\nconst deleteFailure = (contextName, error) => {\n  return {\n    success: false,\n    message: `${contextName} failed to delete`,\n    error,\n  }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  addSuccess,\n  addFailure,\n  fetchSuccess,\n  fetchFailure,\n  updateSuccess,\n  updateFailure,\n  deleteSuccess,\n  deleteFailure,\n});\n\n//# sourceURL=webpack:///./helpers/responseHelpers.js?");

/***/ }),

/***/ "./models/index.js":
/*!*************************!*\
  !*** ./models/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_configdb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/configdb */ \"./config/configdb.json\");\nvar _config_configdb__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config/configdb */ \"./config/configdb.json\", 1);\n\n\n//const fs = require('fs');\n\n//const path = require('path');\n\n//const Sequelize = require('sequelize');\n\nconst basename = path__WEBPACK_IMPORTED_MODULE_1___default.a.basename(__filename);\nconst env = \"development\" || false;\n\n\nconst config = _config_configdb__WEBPACK_IMPORTED_MODULE_3__[env];\nlet db = {};\n\nlet sequelize;\nif (config.use_env_variable) {\n  sequelize = new sequelize__WEBPACK_IMPORTED_MODULE_2___default.a(process.env[config.use_env_variable], config);\n} else {\n  sequelize = new sequelize__WEBPACK_IMPORTED_MODULE_2___default.a(config.database, config.username, config.password, config);\n}\nconsole.log('--------PRB IS HERE================1111', __dirname)\nfs__WEBPACK_IMPORTED_MODULE_0___default.a\n  .readdirSync(__dirname + '/../models/')\n  .filter(file => {\n    console.log(file)\n    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');\n  })\n  .forEach(file => {\n    const model = sequelize['import'](path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname, '/../models/', file));\n    db[model.name] = model;\n  });\n\nObject.keys(db).forEach(modelName => {\n  if (db[modelName].associate) {\n    db[modelName].associate(db);\n  }\n});\n\ndb.sequelize = sequelize;\ndb.Sequelize = sequelize__WEBPACK_IMPORTED_MODULE_2___default.a;\nconsole.log('--------PRB IS HERE================')\n//module.exports = db;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (db);\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/index.js\"))\n\n//# sourceURL=webpack:///./models/index.js?");

/***/ }),

/***/ "./routes/api/index.js":
/*!*****************************!*\
  !*** ./routes/api/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _v1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v1 */ \"./routes/api/v1/index.js\");\n\n\nlet router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\n\nrouter.use('/v1', _v1__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/index.js?");

/***/ }),

/***/ "./routes/api/v1/actuatorActivities/actuatorActivitiesCollection.js":
/*!**************************************************************************!*\
  !*** ./routes/api/v1/actuatorActivities/actuatorActivitiesCollection.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../controllers */ \"./controllers/index.js\");\n\n\nlet router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\n\nrouter.get('/', _controllers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].actuatorActivitiesController.getAllActuatorActivities);\n\nrouter.post('/', _controllers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].actuatorActivitiesController.addActuatorActivity);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/v1/actuatorActivities/actuatorActivitiesCollection.js?");

/***/ }),

/***/ "./routes/api/v1/actuatorActivities/index.js":
/*!***************************************************!*\
  !*** ./routes/api/v1/actuatorActivities/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actuatorActivitiesCollection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actuatorActivitiesCollection */ \"./routes/api/v1/actuatorActivities/actuatorActivitiesCollection.js\");\n\n//import activities from './activities';\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\n\nrouter.use('/', _actuatorActivitiesCollection__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n//router.use('/:deviceRole', activities);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/v1/actuatorActivities/index.js?");

/***/ }),

/***/ "./routes/api/v1/devices/devices.js":
/*!******************************************!*\
  !*** ./routes/api/v1/devices/devices.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../controllers */ \"./controllers/index.js\");\n\n\nlet router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\n\nrouter.put('/:deviceId', _controllers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].devicesController.updateDevice);\n\nrouter.delete('/:deviceId', _controllers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].devicesController.deleteDevice);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/v1/devices/devices.js?");

/***/ }),

/***/ "./routes/api/v1/devices/devicesCollection.js":
/*!****************************************************!*\
  !*** ./routes/api/v1/devices/devicesCollection.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../controllers */ \"./controllers/index.js\");\n\n\nlet router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\n\nrouter.get('/', _controllers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].devicesController.getAllDevices);\n\nrouter.post('/', _controllers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].devicesController.addDevice);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/v1/devices/devicesCollection.js?");

/***/ }),

/***/ "./routes/api/v1/devices/index.js":
/*!****************************************!*\
  !*** ./routes/api/v1/devices/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./devices */ \"./routes/api/v1/devices/devices.js\");\n/* harmony import */ var _devicesCollection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./devicesCollection */ \"./routes/api/v1/devices/devicesCollection.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\n\nrouter.use('/', _devicesCollection__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nrouter.use('/', _devices__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/v1/devices/index.js?");

/***/ }),

/***/ "./routes/api/v1/index.js":
/*!********************************!*\
  !*** ./routes/api/v1/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actuatorActivities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actuatorActivities */ \"./routes/api/v1/actuatorActivities/index.js\");\n/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./devices */ \"./routes/api/v1/devices/index.js\");\n/* harmony import */ var _sensorData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sensorData */ \"./routes/api/v1/sensorData/index.js\");\n\n\n\n\nlet router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\n\nrouter.use('/actuatorActivities', _actuatorActivities__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nrouter.use('/devices', _devices__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nrouter.use('/sensorData', _sensorData__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/v1/index.js?");

/***/ }),

/***/ "./routes/api/v1/sensorData/index.js":
/*!*******************************************!*\
  !*** ./routes/api/v1/sensorData/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sensorDataCollection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sensorDataCollection */ \"./routes/api/v1/sensorData/sensorDataCollection.js\");\n\n//import sensorData from './sensorData';\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\n\nrouter.use('/', _sensorDataCollection__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n//router.use('/:deviceRole', activities);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/v1/sensorData/index.js?");

/***/ }),

/***/ "./routes/api/v1/sensorData/sensorDataCollection.js":
/*!**********************************************************!*\
  !*** ./routes/api/v1/sensorData/sensorDataCollection.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../controllers */ \"./controllers/index.js\");\n\n\nlet router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\n\n\nrouter.get('/', _controllers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sensorDataController.getAllSensorData);\n\n\nrouter.post('/', _controllers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sensorDataController.addSensorData);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api/v1/sensorData/sensorDataCollection.js?");

/***/ }),

/***/ "./routes/index.js":
/*!*************************!*\
  !*** ./routes/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./routes/api/index.js\");\n\n\nlet router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\n\nrouter.use('/api', _api__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/index.js?");

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

/***/ })

/******/ });