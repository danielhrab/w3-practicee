console.log("én vagyok a script.js")

let favoriteBooks = [
  {
      title: "Öreg néne őzikéje",
      author: "Fazekas Anna",
      year: 1952,
      isNewerThan2000: false,
  },
  {
      title: "Szamárfül",
      author: "Romhányi József",
      year: 2003,
      isNewerThan2000: true
  }
]



/* if (favoriteBooks[0].isNewerThan2000 !== true){
  console.log("This book is older than 2000 " + favoriteBooks[0].title)}
  else
{ console.log("This book is newer than 2000 " + favoriteBooks[0].title)
}
if (favoriteBooks[1].isNewerThan2000 !== true){
  console.log("This book is older than 2000 " + favoriteBooks[1].title)}
  else
{ console.log("This book is newer than 2000 " + favoriteBooks[1].title)
}
if (favoriteBooks[0].year < 2000){
  console.log("This book is older than 2000 " + favoriteBooks[0].title)}
  else
{ console.log("This book is newer than 2000 " + favoriteBooks[0].title)
}
if (favoriteBooks[1].year < 2000){
  console.log("This book is older than 2000 " + favoriteBooks[1].title)}
  else
{ console.log("This book is newer than 2000 " + favoriteBooks[1].title)
}
 */

/* 
for (let index = 0; index < favoriteBooks.length; index++){
  console.log(favoriteBooks[0].author)
}
 */
/* const bookTitle = favoriteBooks[0].title
const bookTitle = favoriteBooks[1].title


if (favoriteBooks[0].isNewerThan2000 === true){
  console.log(favoriteBooks[0].title)
}
if (favoriteBooks[0].isNewerThan2000 === true){
  console.log("This is newer than 2000" + bookTitle)
  else
  console.log("This is older than 2000" + bookTitle)
} */

/* const rootElement = document.querySelector('#root')

  for (let index = 0; index < 2; index++) {
    rootElement.insertAdjacentHTML('beforeend',`
    <h1>${favoriteBooks[index].title}</h1>
    <h2>${favoriteBooks[index].author}</h2>
    `)
  }
 */
/* for (const book of favoriteBooks) {
  console.log(book.title)
}
for (let i=0; i < favoriteBooks.length; i++) {
  console.log(favoriteBooks[i].author)
} */