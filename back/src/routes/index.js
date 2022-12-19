import Auth from "./auth.js";
import Search from "./search.js";
function Routes(app, db, response) {
  this.routes = {
    Auth,
    Search,
  };

  this.associate = function () {
    var names = Object.keys(this.routes);
    for (var i = 0; i < names.length; i++) {
      console.log(names[i]);
      this[names[i]] = this.routes[names[i]](app, db, response);
    }
  };

  this.associate();
}

export default Routes;
