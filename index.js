document.getElementById("all-product-category").style.display = "none";

const homeBtn = document.querySelectorAll(".home-btn");
const productBtn = document.querySelectorAll(".products-btn");

const navButtons = document.querySelectorAll(".nav-btn");
navButtons.forEach(button => {
    button.addEventListener("click", function() {
        navButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
    })
});
// console.log(productBtn);




// Home button functionality.............

homeBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log('Home button clicked')

    // Hide products section
    document.getElementById("all-product-category").style.display = "none";
  
    // Show banner and trending sections.............
    const elements = document.getElementsByClassName("hide-active-products");
    for (let el of elements){
        el.style.display = "block";
    }
});
});


function removeActiveClass(){
    const activeButtons = document.getElementsByClassName("active");
    for(let btn of activeButtons){
        btn.classList.remove("active");
    }
}



// ..........trendings are here..............*:

const loadTrendings = () => {
    const url = "https://fakestoreapi.com/products?limit=3";
     fetch(url)
    .then(res => res.json())
    .then((data) => showTrendings(data))
    // console.log(data)     

};

const showTrendings = (products) => {
     
    const trendingContainer = document.getElementById("trending-container");
    trendingContainer.innerHTML ="";
    for (let product  of products) {
        // console.log(product)

        console.log(product.image)

        const div = document.createElement("div");
        div.innerHTML = `   
           <div class="card bg-base-100 w-96 shadow-sm flex items-center justify-center rounded-xl">
                       <div class="w-full h-96 bg-slate-200 items-center justify-center">
                          <img class="w-full h-full p-4 object-contain"
                             src="${product.image}"
                             alt="${product.title}" />
                        
                       </div>
                     <div class="card-body mt-2">
                            <div class="flex text-center justify-between">
                                <span>
                                    <h2 class="text-blue-700 font-semibold px-2 rounded-xl bg-blue-200">${product.category}</h2>
                                </span> 
                                <span class="flex gap-2">
                                    <p><span><i class="text-yellow-300 fa-regular fa-star mr-1"></i></span>${product.rating.rate}</p>
                                    <p>(${product.rating.count})</p>
                                </span>
                            </div>
                                 <p class="mt-2 font-bold">${product.title}</p>
                                 <p class="text-xl font-bold mt-2">$${product.price}</p>
                     <div class="card-actions justify-between mt-3">
                        <button type="submit" class="btn w-40"><span><i class="fa-regular fa-eye"></i></span>Details</button>
                        <button class="btn btn-primary w-40"><span><i class="fa-solid fa-cart-shopping"></i></span>Add</button>
                     </div>
                  </span>
            </div>
        `
        trendingContainer.appendChild(div)
    }
};

//................  categories are here..........................

const loadCategories = async() =>{
    const response = await fetch("https://fakestoreapi.com/products/categories");
    const data = await response.json();
    showCategories(data)

//     function removeActiveClass(){
//     const activeButtons = document.querySelectorAll(".active");
//     activeButtons.forEach(btn => btn.classList.remove("active"));
// }
}


const showCategories = (categories) => {


    const categoryContainer = document.getElementById("category-Container");
        categoryContainer.innerHTML = "";


    for (let cat of categories){
        const categoryBtn = document.createElement("div");
        categoryBtn.innerHTML= `
        <button class="btn rounded-3xl">${cat}</button>
        `   ;
        // const button = categoryBtn.querySelector("button");

        // button.addEventListener("click", () => {
        //     removeActiveClass();
        //     button.classList.add("active");
        // });

             categoryContainer.appendChild(categoryBtn);

    }

}


const loadProducts = () => {
    const url = "https://fakestoreapi.com/products";
     fetch(url)
    .then(res => res.json())
    .then((data) => showProducts(data))
    // console.log(data)     

};


const showProducts = (products) => {
     
    const allProductsContainer = document.getElementById("all-product-Container");
    allProductsContainer.innerHTML ="";
    for (let product  of products) {

        const div = document.createElement("div");
        div.innerHTML = `   
           <div class="card bg-base-100 w-96 shadow-sm flex items-center justify-center rounded-xl">
                       <div class="w-full h-96 bg-slate-200 items-center justify-center">
                          <img class="w-full h-full p-4 object-contain"
                             src="${product.image}"
                             alt="${product.title}" />
                        
                       </div>
                     <div class="card-body mt-2">
                            <div class="flex text-center justify-between">
                                <span>
                                    <h2 class="text-blue-700 font-semibold px-2 rounded-xl bg-blue-200">${product.category}</h2>
                                </span> 
                                <span class="flex gap-2">
                                    <p><span><i class="text-yellow-300 fa-regular fa-star mr-1"></i></span>${product.rating.rate}</p>
                                    <p>(${product.rating.count})</p>
                                </span>
                            </div>
                                 <p class="mt-2 font-bold">${product.title}</p>
                                 <p class="text-xl font-bold mt-2">$${product.price}</p>
                     <div class="card-actions justify-between mt-3">
                        <button type="submit" class="btn w-40"><span><i class="fa-regular fa-eye"></i></span>Details</button>
                        <button class="btn btn-primary w-40"><span><i class="fa-solid fa-cart-shopping"></i></span>Add</button>
                     </div>
                  </span>
            </div>
        `
        allProductsContainer.appendChild(div)
    }
};

// product button functionality..........


productBtn.forEach(btn =>{
    btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log('Products button clicked')


  document.getElementById("all-product-category").style.display = "block";
  
  const elements = document.getElementsByClassName("hide-active-products");
   for (let el of elements){
    console.log(el)
    
       el.style.display = "none";
   }
});
});







loadTrendings()
loadCategories()
loadProducts()




// {
// "id": 5,
// "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
// "price": 695,
// "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
// "category": "jewelery",
// "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
// "rating": {
// "rate": 4.6,
// "count": 400
// }
// }

