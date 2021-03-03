const productsModel = require("../models/productsModel")
const categoryModel = require("../models/categoriesModel")
module.exports = {
    getAll: async function(req, res, next) {
        try{
          
          const productos = await productsModel.find();
          res.json(productos);
        }catch(e){
          next(e);
        }    
      
  },
    getById: async function(req, res, next) {
       
        try{
          const producto = await productsModel.findById(req.params.id);
          res.json(producto);
        }catch(e){
          next(e);
        }
    },
    getByTags: async function(req, res, next) {
       
      try{
        const producto = await productsModel.findOne({"tags._id":req.params.id});
        res.json(producto);
      }catch(e){
        next(e);
      }
  },
    create: async function(req, res, next) {
  
        try{
          const categoria = await categoryModel.findBydIdAndValidate(req.body.category);
          if(categoria.error){
              res.json(categoria);
              return;
          }
          
          const producto = new productsModel({
            name:req.body.name,
            sku:req.body.sku,
            description:req.body.description,
            price:req.body.price,
            category:req.body.category,
            tags:req.body.tags,
            star:req.body.star
          })
          const prod = await producto.save()
          res.json(prod);
        }catch(e){
          console.log(e)
          next(e);
        }
    },
    update: async function(req, res, next) {
      try {
          let producto = await productsModel.updateOne({ _id: req.params.id }, req.body, { multi: false })
          res.json(producto)
      } catch (e) {
          next(e)
      }
    },
    delete: async function(req, res, next) {
      try{
          let producto = await productsModel.deleteOne({ _id: req.params.id })
          res.json(producto)
      } catch (e) {
          next(e)
      }
    },
    getStared: async function(req, res, next) {
       
      try{
        const productos = await productsModel.find({}).where('star').equals('true').limit(4); //solo 4 productos
        res.json(productos);
      }catch(e){
        next(e);
      }
      
  }

}




/*  const productos = [
          {
            id:1,
            name:"Samsung A21s"
          },
          {
            id:2,
            name:"Samsung A31"
          },
          {
            id:3,
            name:"Samsung A55"
          }
        ] */