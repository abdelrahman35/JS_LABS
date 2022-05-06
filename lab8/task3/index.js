function myBook(_title, _author, _numOfChapters, _numOfPages, _numOfCopies) {
  this.title = _title;
  this.author = _author;
  this.numOfChapters = _numOfChapters;
  this.numOfPages = _numOfPages;
  this.numOfCopies = _numOfCopies;

  ++myBook.count;

  this.getCount = function () {
    return myBook.count;
  };
}

myBook.count = 0;

function box(_height, _width, _length, _matrial) {
  this.height = _height;
  this.width = _width;
  this.length = _length;
  this.matrial = _matrial;
  var content = [];

  this.getCount = function () {
    return content.length;
  };

  this.addBook = function (mybook) {
    if (mybook === undefined) {
      return;
    } else {
      content.push(mybook);
      return content;
    }
  };

  this.getBoxContent = function () {
    return content;
  };

  this.pop = function (title) {
    for (var i = 0; i < this.getBoxContent().length; i++) {
      var book = this.getBoxContent()[i];
      if (title == undefined || title.length == 0) {
        alert("enter name of book");
      } else if (book.title == title) {
        if (book.numOfCopies > 1) {
          return --book.numOfCopies;
        } else if (book.numOfCopies == 1) {
          this.getBoxContent().pop();
          return this.getBoxContent();
        } else {
        }
      }
    }
  };
}
