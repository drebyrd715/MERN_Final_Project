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
    {name: 'Diamond Ring', image: 'https://www.jared.com/productimages/processed/V-993088400_0_260.jpg?pristine=true', category: categories[2], price: 200.99},
    {name: 'Diamond Necklace', image: 'https://www.jared.com/productimages/processed/V-580912501_0_260.jpg?pristine=true',  category: categories[2], price: 119.99},
    {name: 'Diamond Earrings', image: 'https://www.jared.com/productimages/processed/V-200338008_0_260.jpg?pristine=true', category: categories[2], price: 130.99},
    {name: 'Diamond Bracelet', image: 'https://www.jared.com/productimages/processed/V-211522507_0_260.jpg?pristine=true', category: categories[2], price: 195.99},
    {name: 'Handmade Bracelet', image: 'https://www.jared.com/productimages/processed/V-380900403_0_260.jpg?pristine=true', category: categories[8], price: 50.99},
    {name: 'Diamond Studs', image: 'https://www.jared.com/productimages/processed/V-190321707_0_260.jpg?pristine=true', category: categories[2], price: 89.99},
    {name: 'Diamond solitaire Fashion', image: 'https://www.jared.com/productimages/processed/V-820679607_0_260.jpg?pristine=true', category: categories[2], price: 65.99},
    {name: 'Halo', image: 'https://www.jared.com/productimages/processed/V-993088400_0_260.jpg?pristine=true', category: categories[0], price: 79.99},
    {name: 'Vintage', image: 'https://www.jared.com/productimages/processed/V-993227800_0_260.jpg?pristine=true', category: categories[0], price: 89.99},
    {name: 'Solitaire', image: 'https://www.jared.com/productimages/processed/V-135448405_0_260.jpg?pristine=true', category: categories[0], price: 67.99},
    {name: '3-Stone', image: 'https://www.jared.com/productimages/processed/V-890185402_0_260.jpg?pristine=true', category: categories[0], price: 92.99},
    {name: 'Diamond Fashion Jewelry', image: 'https://www.jared.com/productimages/processed/V-994145504_0_260.jpg?pristine=true', category: categories[2], price: 55.99},
    {name: 'Gift Set ', image: 'https://www.jared.com/productimages/processed/V-282341801_0_260.jpg?pristine=true', category: categories[7], price: 25.99},
    {name: 'Birthstones', image:'https://www.jared.com/productimages/processed/V-491133702_0_260.jpg?pristine=true', category: categories[3], price: 49.99},
    {name: 'Holiday Bracelet', image: 'https://www.jared.com/productimages/processed/V-723321802_0_260.jpg?pristine=true', category: categories[7], price: 13.99},
    {name: 'Holiday Necklace', image: 'https://www.jared.com/productimages/processed/V-715484503_0_260.jpg?pristine=true', category: categories[7], price: 25.99},
    {name: 'Discount Watch', image: 'https://www.jared.com/productimages/processed/V-311975407_0_260.jpg?pristine=true', category: categories[5], price: 54.99},
    {name: 'Discount Charms', image: 'https://www.jared.com/productimages/processed/V-432020701_0_260.jpg?pristine=true', category: categories[5], price: 45.99},
    {name: 'Smart Watch', image: 'https://www.jared.com/productimages/processed/V-312526700_0_260.jpg?pristine=true', category: categories[4], price: 93.99},
    {name: 'Luxury watch', image: 'https://www.jared.com/productimages/processed/V-887090001_0_260.jpg?pristine=true', category: categories[4], price: 77.99},
    {name: 'Pocket Watch', image: 'https://www.jared.com/productimages/processed/V-311976803_0_260.jpg?pristine=true', category: categories[4], price: 31.99},
    {name: 'Family Heirloom', image: 'https://www.jared.com/productimages/processed/V-271016709_0_260.jpg?pristine=true', category: categories[8], price: 29.99},
    {name: 'Plain Earrings', image: 'https://www.jared.com/productimages/processed/V-182672408_0_260.jpg?pristine=true', category: categories[8], price: 55.99},
    {name: 'Lab-Created Diamonds', image: 'https://www.jared.com/productimages/processed/V-581157601_0_260.jpg?pristine=true', category: categories[2], price: 40.99},
    {name: 'Handmade Necklace', image: 'https://www.jared.com/productimages/processed/V-454999006_0_260.jpg?pristine=true', category: categories[8], price: 112.99},
    {name: 'Fashion Watch', image: 'https://www.jared.com/productimages/processed/V-302321500_0_260.jpg?pristine=true', category: categories[4], price: 78.99},
    {name: 'Diamond Anniversay Ring', image: 'https://www.jared.com/productimages/processed/V-423314905_0_260.jpg?pristine=true', category: categories[1], price: 46.99},
    {name: 'Anniversary Gemstone', image: 'https://www.jared.com/productimages/processed/V-377292709_0_260.jpg?pristine=true', category: categories[1], price: 90.99},
    {name: 'Anniversary Band', image: 'https://www.jared.com/productimages/processed/V-120143300_0_260.jpg?pristine=true', category: categories[1], price: 33.99},
    {name: 'Elegant Emblems', image: 'https://www.jared.com/productimages/processed/V-950280709_0_260.jpg?pristine=true', category: categories[1], price: 27.99},
    {name: 'Crivelli', image: 'https://www.jared.com/productimages/processed/V-112053006_0_260.jpg?pristine=true', category: categories[5], price: 90.99},
    {name: 'Yoko London', image: 'https://www.jared.com/productimages/processed/V-190334209_0_260.jpg?pristine=true', category: categories[3], price: 50.99},
    {name: 'Zydo Italy', image: 'https://www.jared.com/productimages/processed/V-182911800_0_260.jpg?pristine=true', category: categories[3], price: 60.99},
    {name: 'WOLF Palermo Jewelry Roll', image: 'https://www.jared.com/productimages/processed/V-453453108_0_260.jpg?pristine=true', category: categories[3], price: 80.99},
    {name: 'Petite Cross Necklace', image: 'https://www.jared.com/productimages/processed/V-920293204_0_260.jpg?pristine=true', category: categories[3], price: 30.99},
    {name: 'Wedding Band', image: 'https://www.jared.com/productimages/processed/V-121585905_0_260.jpg?pristine=true', category: categories[3], price: 70.99},
    {name: 'Princess Cut', image: 'https://www.jared.com/productimages/processed/V-790217602_0_260.jpg?pristine=true', category: categories[2], price: 90.99},
    {name: 'Pave', image: 'https://www.jared.com/productimages/processed/V-351023700_0_260.jpg?pristine=true', category: categories[0], price: 70.99},
    {name: 'Channel Set', image: 'https://www.jared.com/productimages/processed/V-993843503_0_260.jpg?pristine=true', category: categories[0], price: 30.99},
    {name: 'Diamond Letter Necklace', image: 'https://www.jared.com/productimages/processed/V-981050901_0_260.jpg?pristine=true', category: categories[3], price: 39.99},
  ]);

  console.log(items)

  process.exit();

})();