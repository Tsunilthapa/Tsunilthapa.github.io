const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.use(express.urlencoded({ extended: true }));
app.use("/css", express.static(path.join(__dirname, "css")));

const productsList = [
    {
        id: 1,
        name: "Iphone-13",
        price: 1200,
        description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with: "
    },
    {
        id: 2,
        name: "Pixel",
        price: 1100,
        description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with: "
    },
    {
        id: 3,
        name: "MI",
        price: 600,
        description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with: "
    },
    {
        id: 4,
        name: "Huwawei",
        price: 800,
        description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with: "
    },
    {
        id: 5,
        name: "Sony",
        price: 1100,
        description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with: "
    }

]


app.get("/", (req, res) => {
    res.render("shop", { products: productsList });
});


app.get("/product", (req, res) => {
    let selectedProduct = productsList.find(x => x.id == req.query.id);
    res.render("product", { product: selectedProduct });
});

let cartProducts = [];

app.post('/result', function (req, res, next) {

    let name = req.body.name;
    let age = req.body.age;

    // res.redirect('/output?name=' + name + '&age=' + age);
    res.redirect(url.format({ // use of module url
        pathname: '/output',
        query: { name, age }
    }));

});
app.post("/shoppingCart", (req, res) => {

    let name = req.body.name;
    let price = req.body.price;

    let selectedProduct = cartProducts.find(x => x.name == name);
    let newProd;

    if (selectedProduct != null || selectedProduct != undefined) {

        cartProducts = cartProducts.filter(x => x.name != name);

        newProd = {
            name: selectedProduct.name,
            price: (parseInt(selectedProduct.price) + parseInt(price)),
            quantity: (selectedProduct.quantity + 1),

        };

    }

    else {
        newProd = {
            name: name,
            price: price,
            quantity: 1,

        }
    }

    cartProducts.push(newProd);
    res.render("shoppingCart", { products: cartProducts });
});

app.get("/shoppingCart", (req, res) => {
    res.render("shoppingCart", { products: cartProducts });
});

app.listen(3000);