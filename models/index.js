// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


// Ref: 13-01-23 for how to do this.

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'categoryId'
});


// Categories have many Products
Product.hasMany(Product, {
  foreignKey: 'categoryId'
});


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignKey: 'productId',
    through: {
      model: ProductTag,
      unique: false
    }
});


// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  foreignKey: 'tagId',
    through: {
      model: ProductTag,
      unique: false
    }
});



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
