class Catalog {

    render() {

        let htmlCatalog = '';

        categories.forEach(({name, key}) => {
            htmlCatalog += `
            <li class="categories" data-category="${key}">
                ${name}
            </li>
        
            `;
        });

        const html = `
            <ul>
                ${htmlCatalog}
            </ul>
        `;

        ROOT_CATEGORIES.innerHTML = html;
    }
}

const catalogPage = new Catalog();
catalogPage.render();



class Goods {

    render (element) {
        let htmlGoods = '';

        element.forEach(({name, img, infoData}) => {
            htmlGoods += `
                <li class="goods_wrapper" data-product=${encodeURIComponent(JSON.stringify( infoData))}>
                    <img class="goods_img" src="./images/${img}" />
                    <span class= "goods_name">${name}</span>
                    <span class= "goods_price" >${infoData.price}</span>
                </li>
            `;
        });

        const html = `
            <ul class="goods_conteiner">
                ${htmlGoods}
            </ul>
        `;

        ROOT_GOODS.innerHTML = html;
        
        ROOT_GOODS.querySelectorAll(".goods_wrapper").forEach(goodsElement => {
            goodsElement.addEventListener("click", function() {
                info.render(goodsElement.dataset.product);
            })
        })
    }
}

const goods = new Goods ();



const categoriesElements = document.querySelectorAll(".categories");

categoriesElements.forEach(categoryElement => {
    categoryElement.addEventListener("click", function (){
     goods.render(entities[categoryElement.dataset.category]);
   })
})


class Info {
    
    render (element) {
        const data = JSON.parse(decodeURIComponent(element));
        let htmlInfo = `
                <li class="info"> Ціна: ${data.price} </li>
                <li class="info">Екран: ${data.screen} </li>
                <li class="info">Пам'ять: ${data.memory}</li>
                <li class="info">Камера: ${data.camera}</li>
                <li class="info">Вага: ${data.weight}</li>
                <button class="btn" >Купити</button> 
            `;
        

        const html = `
            <ul class="info_conteiner">
                ${htmlInfo}
            </ul>
        `;

        ROOT_INFO.innerHTML = html;

        ROOT_INFO.querySelector(".btn").addEventListener("click", function () {
            alert("Нажаль товар куплений! Повернутись до  головного меню?")
                ROOT_GOODS.style.display = "none";
                ROOT_INFO.style.display = "none";  
        })

    }
}

const info = new Info();