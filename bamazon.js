var mysql = require("mysql");
require("dotenv").config();
var inquirer = require("inquirer");
const cTable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: process.env.MYSQL_PASSWORD,
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    readProducts();
    
});

function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.table(res);
        getInfo();
    });
    
}
function getInfo() {
    console.log("Getting product info...\n");
    inquirer.prompt([

    {
        name: "productid",
        type: "input",
        message: "What is the ID of the product you would like to buy?"
    },
        {
            name: "units",
            type: "input",
            message: "How many units would you like to purchase?"
        }])
        .then(function (answer) {
            connection.query(
                "SELECT * FROM products WHERE ?", { item_id: answer.productid }, function (err, res) {
                    var newQuantity = res[0].stock_quantity - answer.units
                    if (answer.units > res[0].stock_quantity) {
                        console.log("Insufficient Quantity!")
                    } else {
                        // Update quantity of the item in DB
                        connection.query(
                            "UPDATE products SET ? WHERE ?",
                            [
                                {
                                    stock_quantity: newQuantity
                                },
                                {
                                    item_id: answer.productid
                                }
                            ],
                            function(err) {
                                 var totalPrice = res[0].price * answer.units
                                if (err) throw err;
                                console.log("Item purchased!");
                                console.log("Your total is: " + totalPrice)

                                contShopping();
                    
                            }
                        )
                    }
                }
            )
        })
}
function contShopping() {
    inquirer.prompt([
        {
            name: "keepShopping",
            type: "confirm",
            message: "Would you like to continue shopping?"
        }
    ])
    .then(function(answer) {
        if (answer.keepShopping) {
            readProducts();
        } else {
            console.log("Thank you for shopping with us! Have a nice day!")
            connection.end();
        }
    })
}