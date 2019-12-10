const express = require('express')
const routes = express.Router()
const site = require('./controllers/site')
const recipes = require('./controllers/admin/recipes')

routes.get("/", site.index)
routes.get("/about", site.about)
routes.get("/revenue", site.revenue)
routes.get("/recipes/:index", site.arevenue)

routes.get('/admin/recipes', recipes.index)
routes.get('/admin/recipes/create', recipes.create)
routes.get('/admin/recipes/:id', recipes.show)
routes.get('/admin/recipes/:id/edit', recipes.edit)

routes.post('/admin/recipes', recipes.post)
routes.put('/admin/recipes', recipes.put)
routes.delete('/admin/recipes', recipes.delete)

module.exports = routes
