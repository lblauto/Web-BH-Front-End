let menuleft = document.querySelector('.menu-left');
document.querySelector('.menu-left').onclick = function(){
    menuleft.classList.toggle("active")
}
// --------------slider---------------
const leftbtn = document.querySelector('.fa-angle-left')
const rightbtn = document.querySelector('.fa-angle-right')
const imgNumber = document.querySelectorAll('.slider-left-top img')
console.log(imgNumber.length)
let index = 0
rightbtn.addEventListener("click", function(){
    index = index + 1
    if(index>imgNumber.length-1){
        index = 0
    }
    document.querySelector('.slider-left-top').style.right = index *100+"%" 
})
leftbtn.addEventListener("click", function(){
    index = index - 1
    if(index<0){
        index=imgNumber.length-1
    }
    document.querySelector('.slider-left-top').style.right = index *100+"%" 
})


// phần slider auto

function sliderAuto(){
    index = index + 1
    if(index>imgNumber.length-1){
        index = 0
    }
    document.querySelector('.slider-left-top').style.right = index *100+"%"
}
setInterval(sliderAuto,3500)

// ----------hết phần slider------------
// ------------thêm vào giỏ hàng-------------
const btn = document.querySelectorAll('#button')
// console.log(btn)
btn.forEach(function(button,index){
button.addEventListener("click",function(event){{
    var btnItem = event.target
    // console.log(btnItem)
    var product = btnItem.parentElement
    var productImg = product.querySelector('img').src
    var productName = product.querySelector("p").innerText
    var productPrice = product.querySelector("#monny2").innerText
    // console.log(productPrice)
    addcart(productImg,productName,productPrice)

}})
})

function addcart(productImg,productName,productPrice){
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".name")
        if(productT[i].innerHTML==productName){
            alert("Sản phẩm đã có trong giỏ hàng")
            return
        }
    }
    var trcontent = '<tr><td class="img" style="display: flex;"><img style="width: 50px;" src="'+productImg+'" alt=""><p class="name">'+productName+'</p></td><td><span class="price">'+productPrice+'</span></td><td><input style="outline: none;" type="number" value="1" min="1"></td><td class="delete" style="cursor: pointer;">Xóa</td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)
    carttotal()
    deleteCart()
}

// ----------hết thêm vào giỏ hàng--------------

// ----------tính tổng tiền----------

function carttotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value
        // console.log(inputValue)
        var productPrice = cartItem[i].querySelector(".price").innerHTML
        // console.log(productPrice)
        totalA = inputValue*productPrice*1000
        totalC = totalC + totalA
        // totalD = totalC.toLocaleString('de-DE')
    
    }
    var carttotalA = document.querySelector(".price-total span")
    carttotalA.innerHTML = totalC.toLocaleString('de-DE')
    inputchange()
}

// --------hết tính tổng tiền------------

// ---------click vào giỏ hàng----------
const shopping = document.querySelector('.fa-bag-shopping')
const shoppingclose = document.querySelector('.fa-xmark')
console.log(shoppingclose)
shopping.addEventListener("click",function(){
    document.querySelector('.box-cart').style.display = "flex"
})
shoppingclose.addEventListener("click",function(){
    document.querySelector('.box-cart').style.display = "none"
})

// ------------hết click vào giỏ hàng----------

// -----------xóa cart-----------------
function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".delete")
        productT[i].addEventListener("click", function(event){
            var cartDelete = event.target
            var cartItemDelete = cartDelete.parentElement
            cartItemDelete.remove()
            carttotal()
        })
    }
}

// -------------hết cart---------------

// ---------tăng số lượng sản phẩm và tính lại tổng tiền------
function inputchange(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            carttotal()
        })
    }
}
// ---------hết tăng số lượng sản phẩm và tính lại tổng tiền------


// -------hiệu ứng hover chuyển đổi ảnh-------

function hoverSp1(type){
    const imageSp = document.querySelector("#image1")
    if (type){
        imageSp.src = "item1-sp6.jpg";
    }else{
        imageSp.src = "item1-sp1.jpg";
    }
}

function hoverSp2(type){
    const imageSp = document.querySelector("#image2")
    if (type){
        imageSp.src = "item1-sp4.jpg";
    }else{
        imageSp.src = "item1-sp2.jpg";
    }
}

function hoverSp3(type){
    const imageSp = document.querySelector("#image3")
    if (type){
        imageSp.src = "item1-sp7.jpg";
    }else{
        imageSp.src = "item1-sp3.jpg";
    }
}

function hoverSp4(type){
    const imageSp = document.querySelector("#image4")
    if (type){
        imageSp.src = "item1-sp2.jpg";
    }else{
        imageSp.src = "item1-sp4.jpg";
    }
}

function hoverSp5(type){
    const imageSp = document.querySelector("#image5")
    if (type){
        imageSp.src = "item1-sp1.jpg";
    }else{
        imageSp.src = "item1-sp5.jpg";
    }
}

function hoverSp6(type){
    const imageSp = document.querySelector("#image6")
    if (type){
        imageSp.src = "item1-sp8.jpg";
    }else{
        imageSp.src = "item1-sp6.jpg";
    }
}

// -------hết hiệu ứng hover chuyển đổi ảnh-------

// ---------active shop-website-item3-right-top--------

let activeRighttopitem3 = document.querySelectorAll(".shop-website-item3-right-top p")
let poneitem3 = document.querySelector(".shop-website-item3-right-top p")
poneitem3.classList.add('active')
function activeborder(){
    activeRighttopitem3.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
activeRighttopitem3.forEach((item) =>
item.addEventListener('click', activeborder))

// ---------het active shop-website-item3-right-top--------


// ---------active shop-website-item4-right-top--------

let activeRighttopitem4 = document.querySelectorAll(".shop-website-item4-right-top p")
let poneitem4 = document.querySelector(".shop-website-item4-right-top p")
poneitem4.classList.add('active4')
function activeborder4(){
    activeRighttopitem4.forEach((item) =>
    item.classList.remove('active4'));
    this.classList.add('active4');
}
activeRighttopitem4.forEach((item) =>
item.addEventListener('click', activeborder4))

// ---------het active shop-website-item4-right-top--------

// ------------menu fixed on scroll-----------
var lastScroll = 0;
var header = document.querySelector("header");
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScroll){
        header.style.top="-124px";
    } else {
        header.style.top="0";
    }
    lastScroll = scrollTop;
})

// -----het menu fixed on scroll----------

// ------------thêm giỏ hàng item3-------

const btn3 = document.querySelectorAll('#buttonitem3')
// console.log(btn3)
btn3.forEach(function(button,index){
button.addEventListener("click",function(event){{
    var btnItem3 = event.target
    var product3 = btnItem3.parentElement
    var productImg3 = product3.querySelector('img').src
    var productName3 = product3.querySelector("h3").innerText
    var productPrice3 = product3.querySelector("#price-item2").innerText
    // console.log(productPrice3)
    addcart(productImg3,productName3,productPrice3)

}})
})

// ------------ hết thêm giỏ hàng item3-------



// ----------them gio hang item4------------
const btn4 = document.querySelectorAll('#buttonitem4')
// console.log(btn4)
btn4.forEach(function(button,index){
button.addEventListener("click",function(event){{
    var btnItem4 = event.target
    var product4 = btnItem4.parentElement
    var productImg4 = product4.querySelector('img').src
    var productName4 = product4.querySelector("h3").innerText
    var productPrice4 = product4.querySelector("#price-item2").innerText
    // console.log(productPrice4)
    addcart(productImg4,productName4,productPrice4)

}})
})
// ---------------ngắn hơn item1 bởi vì ta chỉ cần thêm đoạn code phần button thêm giỏ hàng là id="buttonitem4" còn tính tổng số tiền và số lượng thì code ở trên item1 tính toán hết cho rồi nên ko cần code thêm

// ----------------het them gio hang item4------------


// ---------------- them gio hang item5------------

const btn5 = document.querySelectorAll('#buttonitem5')
console.log(btn5)
btn5.forEach(function(button,index){
button.addEventListener("click",function(event){{
    var btnItem5 = event.target
    var product5 = btnItem5.parentElement
    var productImg5 = product5.querySelector('img').src
    var productName5 = product5.querySelector("h3").innerText
    var productPrice5 = product5.querySelector("#price5-item2").innerText
    console.log(productPrice5)
    addcart(productImg5,productName5,productPrice5)

}})
})

// ------------ hết thêm giỏ hàng item5-------

