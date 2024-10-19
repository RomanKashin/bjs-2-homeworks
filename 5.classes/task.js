class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.type = type;
      this._state = state;
    }
  
    fix() {
      this.state = this.state * 1.5;
    }
  
    set state(value) {
      if (value < 0) {
        this._state = 0;
      } else if (value > 100) {
        this._state = 100;
      } else {
        this._state = value;
      }
    }
  
    get state() {
      return this._state;
    }
  }
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type = "magazine") {
      super(name, releaseDate, pagesCount, state, type);
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state, type) {
      super(name, releaseDate, pagesCount, state, (type = "book"));
  
      this.author = author;
    }
  }
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = "novel") {
      super(author, name, releaseDate, pagesCount, state, type);
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = "fantastic") {
      super(author, name, releaseDate, pagesCount, state, type);
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = "detective") {
      super(author, name, releaseDate, pagesCount, state, type);
    }
  }
  
  const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  );
  
  console.log(sherlock.releaseDate); //2019
  console.log(sherlock.state); //100
  sherlock.fix();
  console.log(sherlock.state); //100
  
  const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  );
  
  console.log(picknick.author); //"Аркадий и Борис Стругацкие"
  picknick.state = 10;
  console.log(picknick.state); //10
  picknick.fix();
  console.log(picknick.state); //15
  
  class Library {
    constructor(name) {
      this.name = name;
    }
  
    books = [];
  
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
  
    findBookBy(type, value) {
      return this.books.find((book) => book[type] === value) || null;
    }
  
    giveBookByName(bookName) {
      const booksLength = this.books.length;
      let findedBook = null;
  
      this.books = this.books.filter((book) => {
        if (book.name !== bookName) {
          findedBook = book;
  
          return true;
        }
      });
  
      if (this.books.length === booksLength) {
        return null;
      }
      return findedBook;
    }
  }
  
  const library = new Library("Библиотека имени Ленина");
  
  library.addBook(
    new DetectiveBook(
      "Артур Конан Дойл",
      "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
      2019,
      1008
    )
  );
  library.addBook(
    new FantasticBook(
      "Аркадий и Борис Стругацкие",
      "Пикник на обочине",
      1972,
      168
    )
  );
  library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
  library.addBook(new Magazine("Мурзилка", 1924, 60));
  
  console.log(library.findBookBy("name", "Властелин колец")); //null
  console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"
  
  console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
  library.giveBookByName("Машина времени");
  console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3
  
  class Student {
    constructor(userName) {
      this.userName = userName;
      this.marks = {};
    }
  
    addMark(number, discipline) {
      if (number >= 2 && number <= 5) {
        this.marks[discipline] = [...(this.marks[discipline] || []), number];
      }
    }
  
    getAverageBySubject(discipline) {
      // console.log(this.marks, this.marks[discipline], discipline);
      if (this.marks[discipline]) {
        return this.marks[discipline].reduce((acc, age, _, arr) => {
          acc += Number(age / arr.length);
          return acc;
        }, 0);
      }
      return 0;
    }
  
    getAverage() {
      return Object.keys(this.marks).reduce((acc, value, _, arr) => {
        acc += this.getAverageBySubject(value) / arr.length;
        return acc;
      }, 0);
    }
  }
      
  
  const student = new Student("Олег Никифоров");
  student.addMark(5, "химия");
  student.addMark(5, "химия");
  student.addMark(5, "физика");
  student.addMark(4, "физика");
  student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
  console.log(student.getAverageBySubject("физика")); // Средний балл по предмету физика 4.5
  console.log(student.getAverageBySubject("биология")); // Вернёт 0, так как по такому предмету нет никаких оценок.
  console.log(student.getAverage()); // Средний балл по всем предметам 4.75