const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
//_______________________________________________________________________________________________________________________________________
// 1# DESTRUCTURING - ak potrebujeme data z arrayu alebo objektu, napriklad z celeho objektu kniha nam treba len autora a nazov nic viac

const book = getBook(1);

//takto sa da po jednom ak chceme vytiahnut
// const title = book.title;
// const author = book.author;
// author;
// title;
// console.log(author, title);

//-------------------------

//ale takto to je lepsie a toto sa nazyva destructuring z objektu:

// const { title, author } = book;
// title;
// author;

//Funguje to na baze rovnakeho mena premennej v objekte a pri definovani premennej tu vyssie - {title, author}  z objektu book

//-------------------------
// const { title, author, pages, genres, hasMovieAdaptation, publicationDate } =
//   book;
//-------------------------

//Destructuring z arrayu
// const { title, author, pages, genres, hasMovieAdaptation, publicationDate } =
//   book;
// console.log(genres);

//po jednom
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];
// primaryGenre;
// secondaryGenre;

//destructure v arrayi funguje na baze, ze ked dam primaryGenre na prve miesto, berie to prvy element z arrayu, ked dam secondaryGenre hned potom tak berie druhe miesto

// const [primaryGenre, secondaryGenre] = genres;

//_______________________________________________________________________________________________________________________________________
// 2# REST
//REST operator, znamena zvysne, cize urobime DESTRUCTURE na 2 a zvysne dame do otherGenres, kedze dava zvysok moze byt len na konci
// const [primaryGenre, secondaryGenre, ...otherGenres] = book.genres;
// otherGenres;

//_______________________________________________________________________________________________________________________________________

// #3 SPREAD operator
// ARRAY: vytvorime novy array do ktoreho vieme vlozit vsetky hodnoty ineho arrayu a plus hodnoty ktore chcem pridat, kedze v Reactu su immutable
// const newGenres = ["epic fantasy", ...book.genres];
// newGenres;
//OBJECT:
//spreadne vsetky properties daneho objektu do noveho a prida nakoniec moviePublicationDate
// const updatedBook = { ...book, moviePublicationDate: "2001-12-19" };
// updatedBook;
//Ak ale pridame premennu ktora sa v objekte nachadza, a dame ju nakoniec, tak nasa premenna prepise premennu z objektu, ak ju dame na zaciatok tak objekt prepise nasu
// const updatedPages = {
//   pages: 1210, //ak pohnem pages o dva riadky dole, pages sa prepisu z objektu book na 1216
//   ...book,
//   moviePublicationDate: "2001-12-19",
// };

// updatedPages;

//_______________________________________________________________________________________________________________________________________
//#4 Template literals - pri statickych textoch string ale pri dynamickych a premennych pouzivame toto
//const summary = `hello`;
const { title, publicationDate } = book;

const tryout = `${title} is a book ${2 + 5}`;
tryout;

const splitExplained = `${publicationDate.split("-")[0]}`; //split nam zobere z 1954-17-19, len 1954, ktore fuknciou split oddelime pomlckou
splitExplained;
