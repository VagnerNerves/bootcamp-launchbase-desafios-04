const fs = require('fs')
const revenues = require("../../data.json")


exports.index = function(req,res) {
    return res.render("./admin/recipes/index", { recipes : revenues.recipes })
}

exports.create = function(req,res) {
    return res.render("./admin/recipes/create")
}

exports.show = function(req,res) {
    const { id } = req.params

    const foundRecipes = revenues.recipes[(id-1)]

    if (!foundRecipes) return res.send("Recipe not Found.")

    const recipe = {
        ...foundRecipes,
        id: id
    }

    return res.render("./admin/recipes/show", { recipe })
}

exports.edit = function(req,res) {
    const { id } = req.params

    const foundRecipes = revenues.recipes[(id-1)]

    if (!foundRecipes) return res.send("Recipe not Found.")

    const recipe = {
        ...foundRecipes,
        id: id
    }

    return res.render("./admin/recipes/edit", { recipe })
}

exports.post = function(req,res) {
    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "") {
            return res.send('Preencha todos os campos')
        }
    }

    let { title, image, author, ingredients, preparation, information } = req.body    

    revenues.recipes.push({
        image,
        title,
        author,
        ingredients,
        preparation,
        information 
    })

    fs.writeFile("data.json",JSON.stringify(revenues, null, 2), function(err){
        if (err) return res.send('Falha no arquivo.')

        return res.redirect("/admin/recipes")
    })
}

exports.put = function(req,res) {
    const { id }  = req.body

    const foundRecipes = revenues.recipes[(id-1)]

    if (!foundRecipes) return res.send("Recipe not Found.")

    let recipe = {
        ...foundRecipes,
        ...req.body
    }

    delete recipe.id

    revenues.recipes[(id-1)] = recipe

    fs.writeFile("data.json",JSON.stringify(revenues, null, 2), function(err){
        if (err) return res.send('Falha no arquivo.')

        return res.redirect(`/admin/recipes/${id}`)
    })
}

exports.delete = function(req,res) {
    const { id } = req.body

    const filteredRecipes = revenues.recipes.filter(function(recipe, index){
        return index != (id-1)
    })

    revenues.recipes = filteredRecipes

    fs.writeFile("data.json", JSON.stringify(revenues, null, 2), function(err){
        if (err) return res.send('Falha no arquivo.')

        return res.redirect("/admin/recipes")
    })

}

