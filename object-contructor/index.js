function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.readString = ""

  if (this.read){
    this.readString = "read"
  } else {
    this.readString = "not read yet"
  }

  this.info = function() {
    console.log(this.title + " by " + this.author + ", " + this.pages + ", " + this.readString)
  }
}


const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295 pages", false)

console.log(theHobbit.info());
