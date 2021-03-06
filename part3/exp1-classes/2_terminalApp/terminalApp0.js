// very basic class for storing and viewing names

class View {
  constructor(template) {
    this.db = [];
    this.template = template;
  }

  push(name) {
    this.db.push(name);
  }

  render() {
    return this.template +  this.db;
  }
}

// --------------
var view = new View({
  template: 'Hello, '
});

view.push('ryan');
view.push('kate');

console.log(view.render());
 
// ------------

class LogView extends View {
  render() {
    var compiled = super.render();
    console.log(compiled);
  }
}

var view = new LogView({
  template: 'Hello, '
});

view.render();


