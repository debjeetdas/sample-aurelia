define('app',['exports'], function (exports) {
   'use strict';

   Object.defineProperty(exports, "__esModule", {
      value: true
   });

   function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
         throw new TypeError("Cannot call a class as a function");
      }
   }

   var App = exports.App = function () {
      function App() {
         _classCallCheck(this, App);
      }

      App.prototype.configureRouter = function configureRouter(config, router) {
         config.title = 'Aurelia';

         config.map([{ route: ['', 'home'], name: 'home',
            moduleId: './components/home/home', nav: true, title: 'Home' }, { route: 'adduser', name: 'adduser',
            moduleId: './components/addUser/addUser', nav: true, title: 'adduser' }, { route: 'about', name: 'about',
            moduleId: './components/about/about', nav: true, title: 'About' }]);

         this.router = router;
      };

      return App;
   }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging().plugin('aurelia-bootstrap').feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('components/about/about',['exports', '/bower_components/fetch/fetch'], function (exports) {
   'use strict';

   Object.defineProperty(exports, "__esModule", {
      value: true
   });
   exports.About = undefined;

   function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
         throw new TypeError("Cannot call a class as a function");
      }
   }

   var About = exports.About = function () {
      function About() {
         _classCallCheck(this, About);

         this.jsonValue = {};
         this.localjsonValue = [];
         this.myPostData = {
            id: 101
         };
         this.myUpdateData = {
            id: 1
         };
      }

      About.prototype.getData = function getData() {
         var _this = this;

         fetch('http://jsonplaceholder.typicode.com/posts/1').then(function (response) {
            return response.json();
         }).then(function (data) {
            _this.jsonValue = data;
         });
      };

      About.prototype.postData = function postData(myPostData) {
         var _this2 = this;

         fetch('http://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: JSON.stringify(myPostData)
         }).then(function (response) {
            return response.json();
         }).then(function (data) {
            _this2.jsonValue = data;
         });
      };

      About.prototype.updateData = function updateData() {
         var _this3 = this;

         fetch('../src/components/json/data.json', {
            method: "get"
         }).then(function (response) {
            return response.json();
         }).then(function (data) {
            _this3.localjsonValue = data.result;
         });
      };

      About.prototype.deleteData = function deleteData() {
         var _this4 = this;

         fetch('http://jsonplaceholder.typicode.com/posts/1', {
            method: "DELETE"
         }).then(function (response) {
            return response.json();
         }).then(function (data) {
            _this4.jsonValue = data;
         });
      };

      return About;
   }();
});
define('components/addUser/addUser',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var AddUser = exports.AddUser = function () {
        function AddUser() {
            _classCallCheck(this, AddUser);

            this.emailId = '';
            this.name = '';
            this.someOptions = [{ value: 1, name: 'BA' }, { value: 2, name: 'BU' }];
            this.tablevalue = [];
        }

        AddUser.prototype.AddUser = function AddUser() {
            this.tablevalue.push({ emailId: this.emailId, name: this.name, role: this.selectedVal.name });
            console.log(this.tablevalue);
        };

        return AddUser;
    }();
});
define('components/home/home',['exports', 'aurelia-router', '/bower_components/fetch/fetch'], function (exports, _aureliaRouter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Home = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Home = exports.Home = function () {
    Home.inject = function inject() {
      return [_aureliaRouter.Router];
    };

    function Home(router) {
      _classCallCheck(this, Home);

      this.email = '';
      this.password = '';

      this.theRouter = router;
    }

    Home.prototype.signup = function signup() {
      var myUser = { email: this.email, password: this.password };
      console.log(myUser);
      this.theRouter.navigate("addUser");
    };

    return Home;
  }();
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"main.css\"></require><require from=\"./components/header.html\"></require><header></header><div class=\"container-fluid container-css\"><div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2 sidebar\"><div class=\"list-group side-li\" repeat.for=\"row of router.navigation\"><a href.bind=\"row.href\" class=\"list-group-item active text-center\"><h4 class=\"glyphicon glyphicon-plane\"></h4><br>${row.title}</a></div></div><div class=\"col-lg-10 col-md-10 col-sm-10 col-xs-10 aurelia-view\"><router-view></router-view></div></div></template>"; });
define('text!main.css', ['module'], function(module) { module.exports = ".container-css{\r\n     padding:0px;\r\n}\r\n\r\n.navbar-default {\r\n    background-color: #0087c3;\r\n    border-color: transparent;\r\n    margin: 0;\r\n    border: none;\r\n    border-radius: 0;\r\n}\r\n.navbar-brand > img {\r\n    display: block;\r\n}\r\n.navbar-brand {\r\n    padding: 7px 15px;\r\n}\r\n.navbar-default .navbar-brand {\r\n    color: #777;\r\n}\r\n.app-nav-head {\r\n    padding-left: 12px;\r\n    padding-top: 15px;\r\n    color: white;\r\n    font-family: 'Trebuchet MS';\r\n}\r\n.side-li{\r\n    margin-top:22px;\r\n}\r\n.sidebar{\r\n    height:100vh;\r\n    background-color: black;\r\n}\r\n.aurelia-view{\r\n     margin-top:22px;\r\n}\r\n\r\n/*home page css*/\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.singUp {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\n/*button:hover {\r\n    opacity: 0.8;\r\n}*/\r\n.loginForn{\r\n    width:500px;\r\n    margin:auto;\r\n}\r\n.login-profile{\r\n    width:80px;\r\n    margin:auto;\r\n}\r\n\r\n/*table css*/\r\ntable {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n\r\nth, td {\r\n    text-align: left;\r\n    padding: 8px;\r\n}\r\n\r\ntr:nth-child(even){background-color: #f2f2f2}\r\n\r\nth {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n}\r\n"; });
define('text!components/header.css', ['module'], function(module) { module.exports = ""; });
define('text!components/header.html', ['module'], function(module) { module.exports = "<template><nav class=\"navbar navbar-default\" role=\"navigation\"><div class=\"navbar-header\"><a ng-href=\"/#/\" href=\"/#/\" class=\"navbar-brand hvr-grow\"><img width=\"35\" height=\"35\" border=\"0\" title=\"Dell\" alt=\"Dell\" src=\"src/components/images/logo-wt-bl.png\"></a></div><h4 class=\"nav navbar-nav app-nav-head\">GSD Automation</h4></nav></template>"; });
define('text!components/about/about.css', ['module'], function(module) { module.exports = ""; });
define('text!components/about/about.html', ['module'], function(module) { module.exports = "<template><button click.delegate=\"getData()\">GET</button> <button click.delegate=\"postData()\">POST</button> <button click.delegate=\"updateData()\">PUT</button> <button click.delegate=\"deleteData()\">DEL</button><div class=\"tablediv\"><table><thead><tr><th>Id</th><th>Name</th><th>Text</th></tr></thead><tbody><tr><td>${jsonValue.id}</td><td>${jsonValue.title}</td><td>${jsonValue.body}</td></tr></tbody></table></div><div class=\"tablediv\"><table><thead><tr><th>name</th><th>alpha2_code</th><th>alpha3_code</th></tr></thead><tbody><tr repeat.for=\"localjsonValue of localjsonValue\"><td>${localjsonValue.name}</td><td>${localjsonValue.alpha2_code}</td><td>${localjsonValue.alpha3_code}</td></tr></tbody></table></div></template>"; });
define('text!components/home/home.css', ['module'], function(module) { module.exports = ""; });
define('text!components/addUser/addUser.html', ['module'], function(module) { module.exports = "<template><h1>ADD USER</h1><form role=\"form\" submit.delegate=\"AddUser()\"><label for=\"Name\">Name</label><input type=\"text\" value.bind=\"name\" placeholder=\"Name\"><label for=\"email\">Email</label><input type=\"text\" value.bind=\"emailId\" placeholder=\"email\"><label for=\"Role\">Role:</label><select value.bind=\"selectedVal\"><option repeat.for=\"option of someOptions\" value=\"${option.name}\" model.bind=\"option\">${option.name}</option></select><button type=\"submit\">adduser</button></form><div class=\"tablediv\"><table><thead><tr><th>EmailId</th><th>Name</th><th>Role</th></tr></thead><tbody><tr repeat.for=\"line of tablevalue\"><td>${line.emailId}</td><td>${line.name}</td><td>${line.role}</td></tr></tbody></table></div></template>"; });
define('text!components/home/home.html', ['module'], function(module) { module.exports = "<template><div class=\"loginForn\"><div class=\"login-profile\"><img src=\"src/components/images/user.png\"></div><form role=\"form\" submit.delegate=\"signup()\"><label for=\"email\">Email</label><input type=\"text\" value.bind=\"email\" placeholder=\"Email\"><label for=\"password\">Password</label><input type=\"password\" value.bind=\"password\" placeholder=\"Password\"> <button type=\"submit\" class=\"singUp\">Signup</button></form><div></div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map