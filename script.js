let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };

  randomQuote();


  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  let mainTitle = document.querySelector("#main-title");
  mainTitle.textContent = "The New Title";


  // Part 2
  let bodyStyle = document.querySelector("body").style.backgroundColor = "red";


  // Part 3
 let list = document.querySelector("#favorite-things");
 list.removeChild(list.lastElementChild);




  // Part 4
  let specialTitle = document.querySelectorAll("#special-title");
specialTitle.forEach(title =>{
  title.style.fontSize='2rem'
});



  // Part 5
  let listOfCity = document.querySelector("#past-races");
  document.querySelectorAll('#past-races > li').forEach((item) =>{
    if (item.textContent.trim() === "Chicago"){
      document.querySelector("#past-races").removeChild(item);
    }
  })
  
  
  

  // Part 6
  let el = document.createElement('li');
  el.innerHTML = "New York";
  listOfCity.appendChild(el);


  // Part 7
  // let newYork = document.createElement('div');

  // let races = document.querySelector('#past-races')
  // newYork.innerHTML = '<p>The journey of a thousand miles begins with a single step.👣</p>';
//   newYork.className = 'blog-post'
//  specialTitle.appendChild(newYork);


//Create new div with class of .blog-post
let blogPost = document.createElement('div');
blogPost.className = 'blog-post purple';
let main = document.querySelector('.main')

//Create new h2 with text 
let postTitle = document.createElement('h1');
postTitle.innerText = 'New York';

//Create new p with some text 
let postText = document.createElement('p');
postText.innerText = 'The journey of a thousand miles begins with a single step.👣'
//Append elements in order 
blogPost.appendChild(postTitle); 
blogPost.appendChild(postText); 
main.appendChild(blogPost);


  // Part 8
  let fun = document.querySelector('#quote-title').addEventListener("click", randomQuote);


  // Part 9

// let selBlogPost = document.querySelectorAll('.blog-post');
// selBlogPost.forEach(elem => {

// })


// });
document.querySelectorAll('.blog-post').forEach((item) => {
  item.addEventListener('mouseout', (e) => {
    e.currentTarget.classList.toggle("purple");
  });
  item.addEventListener('mouseenter', (e) => {
    e.stopPropagation();
    e.currentTarget.classList.toggle("red");
  });
  });
});




