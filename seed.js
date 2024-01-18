require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Engagement', sortOrder:10},
    {name: 'Wedding & Anniversary', sortOrder: 20},
    {name: 'Diamonds', sortOrder:30},
    {name: 'Jewelry & Gifts', sortOrder: 40},
    {name: 'Watches', sortOrder: 50},
    {name: 'Deals & Clearance', sortOrder: 60},
    {name: 'Personalized', sortOrder: 70},
    {name: 'Holiday Gifts', sortOrder: 80},
    {name: 'Donated', sortOrder: 90},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Diamond Ring', emoji: '🍔', category: categories[2], price: 200.99},
    {name: 'Diamond Necklace', emoji: '🍜',  category: categories[2], price: 119.99},
    {name: 'Diamond Earrings', emoji: '🍘', category: categories[2], price: 130.99},
    {name: 'Diamond Bracelet', emoji: '🍛', category: categories[2], price: 195.99},
    {name: 'Handmade Bracelet', emoji: '🍢', category: categories[8], price: 50.99},
    {name: 'Diamond Studs', emoji: '🍣', category: categories[2], price: 89.99},
    {name: 'Diamond solitaire Fashion', emoji: '🍖', category: categories[2], price: 65.99},
    {name: 'Halo', emoji: '🥐', category: categories[0], price: 79.99},
    {name: 'Vintage', emoji: '🍳', category: categories[0], price: 89.99},
    {name: 'Solitaire', emoji: '🍩', category: categories[0], price: 67.99},
    {name: '3-Stone', emoji: '🥪', category: categories[0], price: 92.99},
    {name: 'Diamond Fashion Jewelry', emoji: '🌭', category: categories[2], price: 55.99},
    {name: 'Gift Set ', emoji: '🦀', category: categories[7], price: 25.99},
    {name: 'Birthstones', emoji:'🥤', category: categories[3], price: 49.99},
    {name: 'Holiday Bracelet', emoji: '🍤', category: categories[7], price: 13.99},
    {name: 'Holiday Necklace', emoji: '🦞', category: categories[7], price: 25.99},
    {name: 'Discount Watch', emoji: '🌮', category: categories[5], price: 54.99},
    {name: 'Discount Charms', emoji: '🌯', category: categories[5], price: 45.99},
    {name: 'Smart Watch', emoji: '🍕', category: categories[4], price: 93.99},
    {name: 'Luxury watch', emoji: '🍝', category: categories[4], price: 77.99},
    {name: 'Pocket Watch', emoji: '🍞', category: categories[4], price: 31.99},
    {name: 'Family Heirloom', emoji: '🍟', category: categories[8], price: 29.99},
    {name: 'Used Earrings', emoji: '🍿', category: categories[8], price: 55.99},
    {name: 'French Fries', emoji: '🥨', category: categories[2], price: 40.99},
    {name: 'Handmade Necklace', emoji: '🍠', category: categories[8], price: 112.99},
    {name: 'Fashion Watch', emoji: '🥗', category: categories[4], price: 78.99},
    {name: 'Diamon Anniversay Ring', emoji: '🍨', category: categories[1], price: 46.99},
    {name: 'Anniversary Gemstone', emoji: '🧁', category: categories[1], price: 90.99},
    {name: 'Anniversary Band', emoji: '🍮', category: categories[1], price: 33.99},
    {name: 'Elegant Emblems', emoji: '🍰', category: categories[1], price: 27.99},
    {name: 'Crivelli', emoji: '🥙', category: categories[5], price: 90.99},
    {name: 'Yoko London', emoji: '🥛', category: categories[3], price: 50.99},
    {name: 'Zydo Italy', emoji: '☕', category: categories[3], price: 60.99},
    {name: 'WOLF Palermo', emoji: '🍹', category: categories[3], price: 80.99},
    {name: 'Petite Cross Necklace', emoji: '🍺', category: categories[3], price: 30.99},
    {name: 'Wedding Band', emoji: '🍷', category: categories[3], price: 70.99},
    {name: 'Princess Cut', emoji: '🍗', category: categories[2], price: 90.99},
    {name: 'Pave', emoji: '🥞', category: categories[0], price: 70.99},
    {name: 'Channel Set', emoji: '🥓', category: categories[0], price: 30.99},
    {name: 'Diamond Letter Necklace', emoji: '🍵', category: categories[3], price: 39.99},
  ]);

  console.log(items)

  process.exit();

})();