class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  fix() {
    this.state = this.state * 1.5;
    return newstate(this.state);
  }

  set newstate(state) {
    if (this.state < 0) {
      this.state = 0;
    }
    if (this.state > 100) {
      this.state = 100;
    } else {
      this.state = this.state;
    }
  }
}


class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type) {
    super(name, releaseDate, pagesCount, state, type);
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type, author) {
    super(name, releaseDate, pagesCount, state, type);
    this.name = name;
    this.author = author;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = "book";
  }
}

class NovelBook  extends Book {
  constructor(name, releaseDate, pagesCount, state, type, author) {
    super(name, releaseDate, pagesCount, state, type);
    this.name = name;
    this.author = author;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(name, releaseDate, pagesCount, state, type, author) {
    super(name, releaseDate, pagesCount, state, type);
    this.name = name;
    this.author = author;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = "fantastic";
  }
}

class DetectiveBook  extends Book {
  constructor(name, releaseDate, pagesCount, state, type, author) {
    super(name, releaseDate, pagesCount, state, type);
    this.name = name;
    this.author = author;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = "detective";
  }
}
