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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _TaskController = __webpack_require__(/*! ./controller/TaskController */ \"./src/js/controller/TaskController.js\");\n\nvar _TaskController2 = _interopRequireDefault(_TaskController);\n\nvar _TaskModel = __webpack_require__(/*! ./model/TaskModel */ \"./src/js/model/TaskModel.js\");\n\nvar _TaskModel2 = _interopRequireDefault(_TaskModel);\n\nvar _TaskView = __webpack_require__(/*! ./view/TaskView */ \"./src/js/view/TaskView.js\");\n\nvar _TaskView2 = _interopRequireDefault(_TaskView);\n\nvar _TasksView = __webpack_require__(/*! ./view/TasksView */ \"./src/js/view/TasksView.js\");\n\nvar _TasksView2 = _interopRequireDefault(_TasksView);\n\nvar _ErrorView = __webpack_require__(/*! ./view/ErrorView */ \"./src/js/view/ErrorView.js\");\n\nvar _ErrorView2 = _interopRequireDefault(_ErrorView);\n\nvar _AddTaskView = __webpack_require__(/*! ./view/AddTaskView */ \"./src/js/view/AddTaskView.js\");\n\nvar _AddTaskView2 = _interopRequireDefault(_AddTaskView);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar url = 'http://localhost/api/tasks/';\n\nvar taskView = void 0;\nvar tasksView = void 0;\nvar errorView = void 0;\nvar taskModel = void 0;\nvar addTaskView = void 0;\nvar taskController = void 0;\n\nwindow.addEventListener('load', handleWindowLoad);\n\nfunction handleWindowLoad() {\n    taskView = new _TaskView2.default();\n    tasksView = new _TasksView2.default();\n    errorView = new _ErrorView2.default();\n    addTaskView = new _AddTaskView2.default();\n    taskModel = new _TaskModel2.default(url);\n    taskController = new _TaskController2.default(taskModel, taskView, tasksView, errorView, addTaskView);\n\n    handleAddTaskButtonClick();\n    handleClickGetAllTasks();\n    clearModal();\n}\n\nfunction handleClickGetAllTasks() {\n    taskController.listTasks();\n}\n\nfunction handleAddTask(event) {\n    event.preventDefault();\n\n    var alertDanger = document.getElementById('error-alert');\n    while (alertDanger.firstChild) {\n        alertDanger.removeChild(alertDanger.firstChild);\n    }\n\n    var ul = document.createElement('ul');\n    alertDanger.append(ul);\n\n    var formData = new FormData(document.getElementById('form'));\n\n    var note = formData.get('note');\n    inputValidation(note, 'note', ul);\n\n    var category = formData.get('category');\n    inputValidation(category, 'category', ul);\n\n    var dueDate = formData.get('due');\n    inputValidation(dueDate, 'due date', ul);\n\n    var d = new Date();\n    var dformat = [d.getFullYear(), d.getMonth(), d.getDate()].join('-') + 'T' + [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');\n\n    if (note == \"\" || category == \"\" || dueDate == \"\") {\n        alertDanger.style = '';\n    } else {\n        var task = { 'note': note, 'category': category, 'date': dformat, 'dueDate': dueDate };\n        taskController.addTask(task);\n        $(\"#create-task-modal\").modal(\"hide\");\n        window.location.reload();\n    }\n}\n\nfunction handleAddTaskButtonClick(event) {\n    var addTaskButton = document.getElementById('addTaskButton');\n    addTaskButton.addEventListener(\"click\", handleAddTask);\n}\n\nfunction inputValidation(input, error, ul) {\n    if (input == '') {\n        var li = document.createElement('li');\n        li.innerText = error + ' is required!';\n        li.classList.add('alert-danger');\n        ul.appendChild(li);\n    }\n}\n\nfunction clearModal() {\n    $('#create-task-modal').on('hidden.bs.modal', function () {\n        $(this).find(\"input,textarea,select\").val('').end();\n        $('.alert-danger').hide();\n    });\n}\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/controller/TaskController.js":
/*!*********************************************!*\
  !*** ./src/js/controller/TaskController.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar TaskController = function () {\n    function TaskController(taskModel, taskView, tasksView, errorView, addTaskView) {\n        _classCallCheck(this, TaskController);\n\n        this.taskModel = taskModel;\n        this.taskView = taskView;\n        this.tasksView = tasksView;\n        this.errorView = errorView;\n        this.addTaskView = addTaskView;\n    }\n\n    _createClass(TaskController, [{\n        key: \"listTasks\",\n        value: function listTasks() {\n            var _this = this;\n\n            var promise = this.taskModel.listTasks();\n            promise.then(function (tasks) {\n                _this.tasksView.show({ tasks: tasks });\n            }).catch(function (error) {\n                _this.errorView.show({ error: error.message });\n            });\n        }\n    }, {\n        key: \"addTask\",\n        value: function addTask(task) {\n            var _this2 = this;\n\n            var promise = this.taskModel.addTask(task);\n            promise.then(function (object) {\n                if (task.note == null) {\n                    _this2.errorView.show({ error: \"A note is required\" });\n                }\n                if (task.category == null) {\n                    _this2.errorView.show({ error: \"A category is required\" });\n                }\n                if (task.dueDate == null) {\n                    _this2.errorView.show({ error: \"A due date is required\" });\n                }\n            }).catch(function (error) {\n                _this2.errorView.show({ error: error.message });\n            });\n        }\n    }]);\n\n    return TaskController;\n}();\n\nexports.default = TaskController;\n\n//# sourceURL=webpack:///./src/js/controller/TaskController.js?");

/***/ }),

/***/ "./src/js/model/TaskModel.js":
/*!***********************************!*\
  !*** ./src/js/model/TaskModel.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar TaskModel = function () {\n    function TaskModel(url) {\n        _classCallCheck(this, TaskModel);\n\n        this.url = url;\n    }\n\n    _createClass(TaskModel, [{\n        key: 'listTasks',\n        value: function listTasks() {\n            return fetch(this.url, { method: 'GET' }).then(function (response) {\n                if (response.status != 200) {\n                    throw new Error('rejected:' + response.status);\n                }\n                return response.json();\n            });\n        }\n    }, {\n        key: 'addTask',\n        value: function addTask(task) {\n            return fetch(this.url + 'create/', { method: 'POST', body: JSON.stringify(task) }).then(function (response) {\n                if (response.status != 201) {\n                    throw new Error('rejected:' + response.status);\n                }\n                return response.json();\n            });\n        }\n    }]);\n\n    return TaskModel;\n}();\n\nexports.default = TaskModel;\n\n//# sourceURL=webpack:///./src/js/model/TaskModel.js?");

/***/ }),

/***/ "./src/js/view/AddTaskView.js":
/*!************************************!*\
  !*** ./src/js/view/AddTaskView.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _View2 = __webpack_require__(/*! ./View */ \"./src/js/view/View.js\");\n\nvar _View3 = _interopRequireDefault(_View2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar AddTaskView = function (_View) {\n    _inherits(AddTaskView, _View);\n\n    function AddTaskView() {\n        _classCallCheck(this, AddTaskView);\n\n        return _possibleConstructorReturn(this, (AddTaskView.__proto__ || Object.getPrototypeOf(AddTaskView)).apply(this, arguments));\n    }\n\n    _createClass(AddTaskView, [{\n        key: \"show\",\n        value: function show(data) {}\n    }]);\n\n    return AddTaskView;\n}(_View3.default);\n\nexports.default = AddTaskView;\n\n//# sourceURL=webpack:///./src/js/view/AddTaskView.js?");

/***/ }),

/***/ "./src/js/view/ErrorView.js":
/*!**********************************!*\
  !*** ./src/js/view/ErrorView.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if (\"value\" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };\n\nvar _View2 = __webpack_require__(/*! ./View */ \"./src/js/view/View.js\");\n\nvar _View3 = _interopRequireDefault(_View2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ErrorView = function (_View) {\n    _inherits(ErrorView, _View);\n\n    function ErrorView() {\n        _classCallCheck(this, ErrorView);\n\n        return _possibleConstructorReturn(this, (ErrorView.__proto__ || Object.getPrototypeOf(ErrorView)).apply(this, arguments));\n    }\n\n    _createClass(ErrorView, [{\n        key: \"show\",\n        value: function show(data) {\n            var error = data.error;\n            _get(ErrorView.prototype.__proto__ || Object.getPrototypeOf(ErrorView.prototype), \"show\", this).call(this, error);\n        }\n    }]);\n\n    return ErrorView;\n}(_View3.default);\n\nexports.default = ErrorView;\n\n//# sourceURL=webpack:///./src/js/view/ErrorView.js?");

/***/ }),

/***/ "./src/js/view/TaskView.js":
/*!*********************************!*\
  !*** ./src/js/view/TaskView.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _View2 = __webpack_require__(/*! ./View */ \"./src/js/view/View.js\");\n\nvar _View3 = _interopRequireDefault(_View2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TaskView = function (_View) {\n    _inherits(TaskView, _View);\n\n    function TaskView() {\n        _classCallCheck(this, TaskView);\n\n        return _possibleConstructorReturn(this, (TaskView.__proto__ || Object.getPrototypeOf(TaskView)).apply(this, arguments));\n    }\n\n    _createClass(TaskView, [{\n        key: \"show\",\n        value: function show(data) {\n            var task = data.task;\n            var output = document.getElementById(\"output\");\n            var tr = document.createElement('tr');\n\n            var tdId = document.createElement('td');\n            var tdNote = document.createElement('td');\n            var tdCategory = document.createElement('td');\n            var tdDate = document.createElement('td');\n            var tdDueDate = document.createElement('td');\n\n            var id = document.createTextNode(task.id);\n            var note = document.createTextNode(task.note);\n            var category = document.createTextNode(task.category);\n            var date = document.createTextNode(task.date);\n            var dueDate = document.createTextNode(task.dueDate);\n\n            tdId.appendChild(id);\n            tdNote.appendChild(note);\n            tdCategory.appendChild(category);\n            tdDate.appendChild(date);\n            tdDueDate.appendChild(dueDate);\n\n            tr.appendChild(tdId);\n            tr.appendChild(tdNote);\n            tr.appendChild(tdCategory);\n            tr.appendChild(tdDate);\n            tr.appendChild(tdDueDate);\n\n            output.appendChild(tr);\n        }\n    }]);\n\n    return TaskView;\n}(_View3.default);\n\nexports.default = TaskView;\n\n//# sourceURL=webpack:///./src/js/view/TaskView.js?");

/***/ }),

/***/ "./src/js/view/TasksView.js":
/*!**********************************!*\
  !*** ./src/js/view/TasksView.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _View2 = __webpack_require__(/*! ./View */ \"./src/js/view/View.js\");\n\nvar _View3 = _interopRequireDefault(_View2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TasksView = function (_View) {\n    _inherits(TasksView, _View);\n\n    function TasksView() {\n        _classCallCheck(this, TasksView);\n\n        return _possibleConstructorReturn(this, (TasksView.__proto__ || Object.getPrototypeOf(TasksView)).apply(this, arguments));\n    }\n\n    _createClass(TasksView, [{\n        key: \"show\",\n        value: function show(data) {\n            var output = document.getElementById(\"output\");\n            var _iteratorNormalCompletion = true;\n            var _didIteratorError = false;\n            var _iteratorError = undefined;\n\n            try {\n                for (var _iterator = data.tasks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                    var task = _step.value;\n\n                    var tr = document.createElement('tr');\n\n                    var tdId = document.createElement('td');\n                    var tdNote = document.createElement('td');\n                    var tdCategory = document.createElement('td');\n                    var tdDate = document.createElement('td');\n                    var tdDueDate = document.createElement('td');\n\n                    var id = document.createTextNode(task.id);\n                    var note = document.createTextNode(task.note);\n                    var category = document.createTextNode(task.category);\n                    var date = document.createTextNode(task.date);\n                    var dueDate = document.createTextNode(task.dueDate);\n\n                    tdId.appendChild(id);\n                    tdNote.appendChild(note);\n                    tdCategory.appendChild(category);\n                    tdDate.appendChild(date);\n                    tdDueDate.appendChild(dueDate);\n\n                    tr.appendChild(tdId);\n                    tr.appendChild(tdNote);\n                    tr.appendChild(tdCategory);\n                    tr.appendChild(tdDate);\n                    tr.appendChild(tdDueDate);\n\n                    output.appendChild(tr);\n                }\n            } catch (err) {\n                _didIteratorError = true;\n                _iteratorError = err;\n            } finally {\n                try {\n                    if (!_iteratorNormalCompletion && _iterator.return) {\n                        _iterator.return();\n                    }\n                } finally {\n                    if (_didIteratorError) {\n                        throw _iteratorError;\n                    }\n                }\n            }\n        }\n    }]);\n\n    return TasksView;\n}(_View3.default);\n\nexports.default = TasksView;\n\n//# sourceURL=webpack:///./src/js/view/TasksView.js?");

/***/ }),

/***/ "./src/js/view/View.js":
/*!*****************************!*\
  !*** ./src/js/view/View.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar View = function () {\n    function View() {\n        _classCallCheck(this, View);\n\n        this.outputElement = document.getElementById('output');\n    }\n\n    _createClass(View, [{\n        key: \"show\",\n        value: function show(data) {\n            while (this.outputElement.hasChildNodes()) {\n                this.outputElement.removeChild(this.outputElement.firstChild);\n            }\n            var textNode = document.createTextNode(data);\n            this.outputElement.appendChild(textNode);\n        }\n    }]);\n\n    return View;\n}();\n\nexports.default = View;\n\n//# sourceURL=webpack:///./src/js/view/View.js?");

/***/ })

/******/ });