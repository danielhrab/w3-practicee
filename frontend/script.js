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

const rootElement = document.querySelector('#root')

  for (let index = 0; index < 2; index++) {
    rootElement.insertAdjacentHTML('beforeend',`
    <h1>${favoriteBooks[index].title}</h1>
    <h2>${favoriteBooks[index].author}</h2>
    `)
  }

for (const book of favoriteBooks) {
  console.log(book.title)
}
for (let i=0; i < favoriteBooks.length; i++) {
  console.log(favoriteBooks[i].author)
}

