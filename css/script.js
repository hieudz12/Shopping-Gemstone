const adressbtn = document.querySelector('#adress-form')
const adressclose = document.querySelector('#adress-close')

adressbtn.addEventListener("click", function(){
    document.querySelector('.adress-form'). style.display = "flex"
})
/*  */
adressclose.addEventListener("click", function(){
    document.querySelector('.adress-form'). style.display = "none"
})
/* -----slider--------- */
/* const rightbnt = document.querySelector('.fa-chevron-right')
rightbnt.addEventListener ("click", function(){
    document.querySelector(".slider-content-left-top").style.right = "100%"
})  */
function chitietsp(){
   
        window.location="product details copy.htm"
   
}
/* banner */
var mang = [
    'image/anh2.webp',  'image/anh3.webp',  'image/anh4.webp',  'image/anh5.webp',  'image/anh6.webp'
];
  var index = 0;

    function next() {
        index++;
        if(index==mang.length) index = 0;
        var anh = document.getElementById('slider-content-left-top');
        anh.src = mang[index];
    }
    function prev() {
        index--;
        if(index==-1) index = mang.length-1;
        var anh = document.getElementById('slider-content-left-top');
        anh.src = mang[index];
    }
    setInterval('next()',2000);
/* cript */
var sp = "";
var products = [
    {
        "id":1,
        "img":"image/gallery1.jpg",
        "name":"OPPO A57 128GB",
        "price":"31.990.000",
        "discount":"-15%",
        "prices":2699000,
        "chip":"Snapdragon 8+ Gen 1",
        "screen":"Đen",
        "ram":12,
        "rom":256,
        "quantity":1
    },
    {
        "id":2,
        "img":"image/gallery2.jpg",
        "name":"OPPO Reno8 T 4G 256GB",
        "price":"30.990.000",
        "discount":"-15%",
        "prices":2999000,
        "chip":"Snapdragon 8+ Gen 1",
        "screen":"Vàng trắng",
        "ram":6,
        "rom":125,
        "quantity":1
    },
    {
        "id":3,
        "img":"image/gallery3.jpg",
        "name":"iPhone 14 Pro Max 128GB",
        "price":"39.990.000",
        "discount":"-15%",
        "prices":31990000,
        "chip":"Snapdragon 8+ Gen 1",
        "screen":"Vàng",
        "ram":16,
        "rom":350,
        "quantity":1
    },
    {
        "id":4,
        "img":"image/gallery4.jpg",
        "name":" iPhone 14 Pro (128GB) ",
        "price":"33.990.000",
        "discount":"-15%",
        "prices":3099000,
        "chip":"Snapdragon 8+ Gen 1",
        "screen":"Đen",
        "ram":14,
        "rom":300,
        "quantity":1
    },
    {
        "id":5,
        "img":"image/gallery5.jpg",
        "name":"Samsung Galaxy S23 Ultra",
        "price":"21.990.000",
        "discount":"-15%",
        "prices":1999000,
        "chip":"Snapdragon 8+ Gen 1",
        "screen":"Đen tím",
        "ram":8,
        "rom":215,
        "quantity":1
    },
    {
        "id":6,
        "img":"image/gallery6.jpg",
        "name":"Samsung Galaxy S23+ 5G",
        "price":"25.990.000",
        "discount":"-15%",
        "prices":2190000,
        "chip":"Snapdragon 8+ Gen 1",
        "screen":"Xanh",
        "ram":10,
        "rom":256,
        "quantity":1
    },
    {
        "id":7,
        "img":"image/gallery7.jpg",
        "name":"Vivo V25 series",
        "price":"15.990.000",
        "discount":"-15%",
        "prices":1199990,
        "chip":"Snapdragon 8+ Gen 1",
        "screen":"Nâu đỏ",
        "ram":12,
        "rom":225,
        "quantity":1
    },
    {
        "id":8,
        "img":"image/gallery8.jpg",
        "name":"realme C30s",
        "price":"28.990.000",
        "discount":"-15%",
        "prices":22990000,
        "chip":"Snapdragon 8+ Gen 1",
        "screen":"Trắng",
        "ram":18,
        "rom":150,
        "quantity":1
    },
    {
        "id":9,
        "img":"image/gallery9.jpg",
        "name":"realme C55",
        "price":"20.990.000",
        "discount":"-15%",
        "prices":15000000,
        "chip":"Snapdragon 8+ Gen 1",
        "screen":"Đen nhám",
        "ram":14,
        "rom":125,
        "quantity":1
    },
    {
        "id":10,
        "img":"image/gallery10.jpg",
        "name":"Xiaomi Redmi 12C",
        "price":"12.990.000",
        "discount":"-15%",
        "prices":9990000,
        "chip":"Snapdragon 8+ Gen 1",
        "screen":"Đen caro",
        "ram":6,
        "rom":65,
        "quantity":1
    },
    
    
    

]; 
    for (var i=0; i<products.length; i++) {
        sp +=  
                `
                <div class='product-gallery-one-conten-product-item'>
                  <a href="product details copy.htm?index=${i}"> <img src='${products[i].img}'px"></a>
                    <div class='product-gallery-one-conten-product-item-text'>
                      <li><img src='image/text.webp' ><p>Trợ giá khách hàng</p></li>
                       <li>${products[i].name}</li>
                    <li ><a style=' text-decoration: line-through;color: black;' href=''>${products[i].price}</a><sup>đ</sup><span>${products[i].discount}</span></li>
                    <li>${products[i].prices}<sup>đ</sup></li>
                      <li >Quà 500.000<sup>đ</sup></li>
                       <li>
                          <i class='fas fa-star'></i>
                            <i class='fas fa-star'></i>
                           <i class='fas fa-star'></i>
                           <i class='fas fa-star'></i>
                           <i class='fas fa-star'></i>
                      </li>
                     <button onclick='addCart(${i},${products[i].id})'>Thêm Vào Giỏ Hàng</button>
                  </div>
                 </div> 
                `
    }
    document.getElementById('product-gallery-one-conten-product').innerHTML=sp;
    var cart = [];
    function addCart(index,id){
        var checkChung = true;
       if(cart.length>0){
        for(let i=0; i<cart.length; i++){
            if(cart[i]['id']==id){
                cart[i]['quantity'] += 1;
                checkChung = false;
         }
        }
       }
       if(checkChung==true){
        cart.push(products[index]);
       }
       /* hien thi so san pham tren gio hang */
       console.log(cart);
       var count = 0;
       for(var i=0; i<cart.length; i++){
           count += cart[i]['quantity'];
       }
       document.getElementById("concat").innerHTML=count;
       localStorage.setItem('cart',JSON.stringify(cart));
       
    }   
    