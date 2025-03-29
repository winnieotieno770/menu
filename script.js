const menu = [
    {
      id: 1,
      name: "Nyama Choma",
      description: "Grilled Kenyan beef served with a side of vegetables and ugali.",
      image: "./images/nyamachoma.jpg", 
      category: "Meat",
      price: "$12.99"
    },
    {
      id: 2,
      name: "Mandazi",
      description: "Fried dough pastry, sweet and fluffy, a perfect snack.",
      image: "./images/mandazi.jpg",
      category: "Snack",
      price: "$3.99"
    },
    {
      id: 3,
      name: "Sukuma Wiki",
      description: "A popular Kenyan vegetable dish made with collard greens.",
      image: "./images/skumawiki.webp",
      category: "Vegetarian",
      price: "$5.99"
    },
    {
      id: 4,
      name: "Ugali",
      description: "A staple Kenyan dish made from maize flour, served with a variety of stews.",
      image:"./images/ugali.jpg",
      category: "Side Dish",
      price: "$2.99"
    },
    {
      id: 5,
      name: "Chapati",
      description: "Soft and flaky flatbread, perfect for pairing with stews or vegetables.",
      image: "./images/chapati.jpg", 
      category: "Bread",
      price: "$4.49"
    },
    {
      id: 6,
      name: "Githeri",
      description: "A hearty mix of maize, beans, and vegetables, a staple Kenyan dish.",
      image: "/images/githeri.webp",
      category: "Vegetarian",
      price: "$7.99"
    },
    {
      id: 7,
      name: "Samosa",
      description: "Fried triangular pastry filled with spiced meat or vegetables.",
      image: "./images/samosa.jpg", 
      category: "Snack",
      price: "$2.99"
    },
    {
      id: 8,
      name: "Fish and Chips",
      description: "Deep-fried fish served with crispy fries, a popular coastal dish.",
      image: "./images/fish-and-chips.jpg",
      category: "Seafood",
      price: "$8.99"
    },
    {
      id: 9,
      name: "Kenyan Pilau",
      description: "Spiced rice dish made with meat, vegetables, and aromatic spices.",
      image: "./images/pilau.jpg",
      category: "Main Course",
      price: "$10.99"
    },
    {
      id: 10,
      name: "Beef Stew",
      description: "Tender beef stew cooked with tomatoes, onions, and Kenyan spices.",
      image: "/images/beef-stew.jpg", 
      category: "Stew",
      price: "$12.49"
    },
    {
      id: 11,
      name: "Kenyan Mandazi",
      description: "Sweet fried dough pastry enjoyed as a breakfast or snack.",
      image: "./images/mandazi.jpg",
      category: "Dessert",
      price: "$4.49"
    },
    {
      id: 12,
      name: "Matoke",
      description: "Cooked green bananas served in a delicious stew.",
      image: "./images/matoke.webp", 
      category: "Vegetarian",
      price: "$6.49"
    },
    {
      id: 13,
      name: "Mutura",
      description: "Kenyan sausage made from beef, goat, or chicken, grilled to perfection.",
      image: "./images/muturakach.webp",
      category: "Meat",
      price: "$7.99"
    },
    {
      id: 14,
      name: "Nairobi Chicken",
      description: "Grilled or fried chicken served with ugali and vegetables.",
      image: "./images/naichicken.jpg", 
      category: "Chicken",
      price: "$9.99"
    },
    {
      id: 15,
      name: "Pineapple Juice",
      description: "Freshly squeezed Kenyan pineapple juice, a refreshing drink.",
      image: "./images/pineapple.jpg", // Pineapple Juice
      category: "Beverage",
      price: "$2.99"
    },
    {
      id: 16,
      name: "Mchuzi Wa Samaki",
      description: "Kenyan-style fish stew made with spices, tomatoes, and coconut milk.",
      image: "./images/mchuziwasamaki.jpeg", // Mchuzi wa Samaki
      category: "Seafood",
      price: "$11.99"
    },
    {
      id: 17,
      name: "Beef Kebab",
      description: "Skewered and grilled marinated beef served with kachumbari.",
      image: "./images/kebab.jpg",
      category: "Meat",
      price: "$8.49"
    },
    {
      id: 18,
      name: "Chai Tea",
      description: "Traditional Kenyan tea made with spices, milk, and sugar.",
      image: "./images/tea.jpg", 
      category: "Beverage",
      price: "$1.99"
    },
    {
      id: 19,
      name: "Kachumbari",
      description: "Kenyan salad made with tomatoes, onions, and chili.",
      image: "./images/kachumbari.jpeg", // Kachumbari
      category: "Salad",
      price: "$3.49"
    },
    {
      id: 20,
      name: "Kenyan Ice Cream",
      description: "Traditional Kenyan-style ice cream made with local ingredients.",
      image: "./images/icecream.jpg",
      category: "Dessert",
      price: "$4.99"
    }
];


// dom elements
const menuContainer = document.querySelector(".menu");
// const buttonContainer = document.querySelector(".button-container");


window.addEventListener("DOMContentLoaded",()=>{
    displayMenuItems(menu)
    displayFilteredItems()
})

function  displayMenuItems(menuItems) {
    let displaymenu = menuItems.map(item=>{
        return `
            <div class="menu-item">
            <img src=${item.image} alt=${item.name}>
            <div class="menu-info">
            <h2>${item.name}</h2>
              <p class="category">${item.category}</p>
              <p class="description">${item.description}</p>
              <p class="price">${item.price}</p>
              </div>
              </div>
              
              `
            }).join("")
            menuContainer.innerHTML = displaymenu
}

 function displayFilteredItems(){
                                
    const categories = menu.reduce((values,item)=>{
        if(!values.includes(item.category)){
            values.push(item.category)
        }
        return values   
    },["All"])

    const filterBtn = categories.map(category=>{
        return   `
            <button class="filter-btn" data-category="${category}">${category}</button>
        `
    }).join("")
const buttonContainer = document.querySelector(".button-container");


    buttonContainer.innerHTML= filterBtn
    const filterButtons = document.querySelectorAll(".filter-btn")

        // filter the buttons
    filterButtons.forEach((filterBtn) =>{
        
        filterBtn.addEventListener("click",(e)=>{
                const category = e.currentTarget.dataset.category.trim();
                const filteredItems = menu.filter(menuItem=>{
                            return menuItem.category.trim().toLowerCase()===category.toLowerCase()
                        })
                
                        if(category === 'All'){
                                displayMenuItems(menu)
                            }
            else{
                    displayMenuItems(filteredItems)
            }
        })

    })
    }
       


   

    