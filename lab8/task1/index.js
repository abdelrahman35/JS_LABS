var myObject = {
  getSetGen: function (object) {
    for (var key in object) {
      if (typeof object[key] != "function") {
        (function (myKey) {
          key = `get${key}`;

          Object.getPrototypeOf(object)[key] = function () {
            return this[myKey];
          };

          key = `${key.replace("get", "set")}`;
          Object.getPrototypeOf(object)[key] = function (val) {
            return (this[myKey] = val);
          };
        })(key);
      }
    }
  },
};

function myObj(_id, _Name, _age, _location, _address) {
  this.id = _id;
  this.Name = _Name;
  this.age = _age;
  this.location = _location;
  this.address = _address;

  this.display = function () {
    return `id: ${this.id}, name: ${this.name} , age: ${this.age}, location: ${this.location}, add: ${this.address}`;
  };
}

var objOne = new obj(1, "tarek", 24, "egypt", "damietta");

myObject.getSetGen(objOne);
