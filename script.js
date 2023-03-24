const mens_cloth = document.getElementById("men_cloth");
console.log(mens_cloth);
let s = document.getElementById("items");
const wmn_cloth = document.getElementById("wmn_cloth");
const result=document.getElementById("results");
const input=document.getElementById("srch");
const stat=document.getElementById("items");
const d_list=document.getElementById("srchdata");
fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>{
              console.log("catogory",json);
              for(let i=0;i<(json.length);i++)
              {
                d_list.innerHTML+=`<option value="${json[i]}">${json[i]}</option>`;
              }
            })
fetch("https://fakestoreapi.com/products/category/men's%20clothing")
  .then((a) => a.json())
  .then((response) => {
    console.log(response);
    console.log(response[0]);
    console.log(response.length);
    for (let i = 0; i < response.length; i++) {
      const div1 = document.createElement("div");
      div1.setAttribute("class", "product");
      div1.setAttribute("id", `i-${i}`);
      mens_cloth.appendChild(div1);
      const div2 = document.createElement("div");
      div2.setAttribute("class", "p_image");
      div1.append(div2);
      const img = document.createElement("img");
      img.src = response[i].image;
      img.setAttribute("class", "product_img");
      div2.append(img);
      let _title = document.createElement("p");
      _title.setAttribute("id", "title");
      //_title.innerText=response[i].title;
      div1.append(_title);
      let _price = document.createElement("p");
      _price.setAttribute("id", "price");
      //_price.innerText=response[i].price;
      _title.innerHTML = `<span>${response[i].title}</span>`;
      _price.innerHTML = `<span>price:</span>$${response[i].price}`;
      div1.append(_price);
    }
  });

fetch("https://fakestoreapi.com/products/category/women's%20clothing")
  .then((a) => a.json())
  .then((response) => {
    console.log(response);
    console.log(response[0]);
    console.log(response.length);
    for (let i = 0; i < response.length; i++) {
      const div1 = document.createElement("div");
      div1.setAttribute("class", "product");
      div1.setAttribute("id", `i-${i}`);
      wmn_cloth.appendChild(div1);
      const div2 = document.createElement("div");
      div2.setAttribute("class", "p_image");
      div1.append(div2);
      const img = document.createElement("img");
      img.src = response[i].image;
      img.setAttribute("class", "product_img");
      div2.append(img);
      let _title = document.createElement("p");
      _title.setAttribute("id", "title");
      //_title.innerText=response[i].title;
      div1.append(_title);
      let _price = document.createElement("p");
      _price.setAttribute("id", "price");
      //_price.innerText=response[i].price;
      _title.innerHTML = `<span>${response[i].title}</span>`;
      _price.innerHTML = `<span>price:</span>$${response[i].price}`;
      div1.append(_price);
    }
  });
  const rslt=document.getElementById("rslt");
  input.addEventListener("keypress",e =>{
    if(e.key==='Enter')
  {
    fetchresults();
  } })
  function fetchresults() {
    stat.style.display="none";
    fetch(`https://fakestoreapi.com/products/category/${input.value}`)
            .then(res=>res.json())
            .then(response=>
              {console.log(response);
                for (let i = 0; i < response.length; i++) {
                  const div1 = document.createElement("div");
                  div1.setAttribute("class", "product");
                  div1.setAttribute("id", `i-${i}`);
                  rslt.appendChild(div1);
                  const div2 = document.createElement("div");
                  div2.setAttribute("class", "p_image");
                  div1.append(div2);
                  const img = document.createElement("img");
                  img.src = response[i].image;
                  img.setAttribute("class", "product_img");
                  div2.append(img);
                  let _title = document.createElement("p");
                  _title.setAttribute("id", "title");
                  //_title.innerText=response[i].title;
                  div1.append(_title);
                  let _price = document.createElement("p");
                  _price.setAttribute("id", "price");
                  //_price.innerText=response[i].price;
                  _title.innerHTML = `<span>${response[i].title}</span>`;
                  _price.innerHTML = `<span>price:</span>$${response[i].price}`;
                  div1.append(_price);
                }
              })
      
  }