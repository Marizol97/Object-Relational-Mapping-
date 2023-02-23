# E-commerce Back End Starter Code


## Table of Content 
1. [Description](#description)
2. [Contribution](#contribution)
3. [Link](#link)

<a name = "description"></a>
## Description
Created the back end of an e-commerce site, using MySQL2 and Sequelize packages to connect with Express.js API and dotenv package to store sensitive data.
The file structure is setup as MVC paradigm 
Each model contains id, integer, doesn't allow null values, set as primary key, uses auto increment.
Cateogory.js properties contain id, and category_name
Index.js requires and exports all models, sorts products and categories with foregin keys and product tags. 
Product properties are id, price, stock and category_id. 
Tag properties are id, and tag_name.
ProductTag are id,
product_id,and tag_id
<a name = "installation"></a>
## Installation
npm install

<a name = "link"></a>
## Link
[Demo]()