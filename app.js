const news =()=>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data =>displayCategories(data))
}
const displayCategories=categories=>{
    console.log(categories);
    const menu=categories.data.news_category;
    console.log(menu);
    const categoryContainer =document.getElementById('categories');
    // console.log(categoryContainer)
    for(const category of menu){
        const categoryDiv =document.createElement('div');
        categoryDiv.classList.add('category');
        
            categoryDiv.innerHTML=`
            <a href="#"  onclick="loadDetails('${category.category_id}')"  class="heading">${category.category_name}</a>
               
            `;
            
         
        
        categoryContainer.appendChild(categoryDiv);
        // categoryID(category.category_name);
    }
}

const loadDetails=id=>{
    const url=`https://openapi.programming-hero.com/api/news/category/${id}`

    var x = document.getElementById("message");
    // if (x.style.display === "none") {
    //   x.style.display = "block";
    // } else {
      x.style.display = "none";

    console.log('category id is =',id);
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayNews(data))
    
}


const displayNews = (news) =>{
    
    console.log(news);
    console.log(news.data[0].title);

    const mine=news.data;
    console.log(mine);
    const newsContainer = document.getElementById('news-container');
    // console.log(categoryContainer)
    
    for(const allNews of mine){

      const modalTitle =document.getElementById('exampleModalLabel');
       modalTitle.innerText=allNews.title;
      
       const countryDetail =document.getElementById('country-details');
        countryDetail.innerHTML =`
                <p class="card-text">${allNews.details}</p>
                     `



        const allNewsDiv =document.createElement('div');
        allNewsDiv.classList.add('allNews');
        allNewsDiv.innerHTML=`
                <div class="card mb-3" >
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src="${allNews.image_url}" class="img-fluid rounded-start"  alt="...">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">${allNews.title}</h5>
                          <p class="card-text cutoff-text">${allNews.details}</p>
                        <div class="flex">
                          
                        <div >
                              <p class="card-text "><small class="text-body-secondary">${allNews.author.name}</small></p>
                              <p class="card-text"><small class="text-body-secondary">${allNews.author.published_date}</small></p>

                        </div>
                        <div >
                              <p><small class="text-body-secondary"> Views </small> </p> 
                              <p><small class="text-body-secondary">${allNews.total_view}M</small></p>   
                        </div>
                        <div>
                            <button  type="button" class="btn btn-dark " data-bs-toggle="modal" data-bs-target="#exampleModal" style=margin-top:15px; >Visit</button>
                        </div>
                        </div>
                        
                          
                        </div>
                     </div>
                    </div>
                 </div>

                          
                          
                          `;
            
         
        
                          newsContainer.appendChild(allNewsDiv);
                          // categoryID(category.category_name);
                        }
                        
                        
                      }
                      
                      // function myFunction() {
                      //   // var x = document.getElementById("news1");
                      //   function clearBox("news-container")
                      //     {
                      //         document.getElementById("news-container").innerHTML = "";
                      //     }

                      //   // <a href="index.html"></a>
                      // }      
                      
                      let output = document.getElementById('output');
      function clearDiv() {
         // access the div element and use the replaceChildren() method to clear the div content
         let div = document.getElementById("news-container");
         div.replaceChildren();
      }
                      
 news();
                      
                      

