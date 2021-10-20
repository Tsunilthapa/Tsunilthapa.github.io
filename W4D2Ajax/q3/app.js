const express = require("express");
const path = require("path");
const app = express();
const session = require("express-session");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.use(express.urlencoded({ extended: true }));
app.use("/css", express.static(path.join(__dirname, "css")));
app.use("/js", express.static(path.join(__dirname, "view", "js")));
app.use(express.json());


app.use(
    session({
        secret: "salt for cookie signing",
        resave: true,
        saveUninitialized: true
    })
);

app.use((req, res, next) => {
    if (!req.session.cart) {
        req.session.cart = {};
    }
    next();
});


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

let itemCount = 0;
app.get("/product", (req, res) => {
    let selectedProduct = productsList.find(x => x.id == req.query.id);
    res.render("product", { product: selectedProduct, cartProductCount: itemCount, });
});

app.post("/addToCart", (req, res) => {

    let name = req.body.name;
    let price = req.body.price;

    let selectedProduct = req.session.cart[name];
    // cartProducts.find(x => x.name == name);
    let newProd;

    if (selectedProduct != null || selectedProduct != undefined) {

        // cartProducts = cartProducts.filter(x => x.name != name);

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

    req.session.cart[name] = newProd;
    itemCount++;
    // cartProducts.push(newProd);
    // res.render("shoppingCart", { products: req.session.cart });
    return res.send({
        products: req.session.cart,
        cartProductCount: itemCount,
        message: "Successfully added on cart",
    });
});

app.get("/shoppingCart", (req, res) => {
    res.render("shoppingCart", { products: req.session.cart });
});

app.listen(3000)