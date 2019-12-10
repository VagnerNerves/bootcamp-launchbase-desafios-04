const revenues = require("../data.json")

exports.index = function(req,res){
    return res.render("./site/index", { revenues : revenues.recipes })
}

exports.about = function(req,res){
    return res.render("./site/about")
}

exports.revenue = function(req,res){
    return res.render("./site/revenue", { revenues : revenues.recipes })
}

exports.arevenue = function (req,res){
    const recipeIndex = req.params.index;

    const revenue = revenues.recipes[recipeIndex]

    return res.render("./site/recipes", { revenue })
}
