const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name']
      }
    ]
  }).then(data => res.json(data)).catch(err => res.status(401).json(err))
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
		where: { id: req.params.id },
		include: [
			{
				model: Product,
				attributes: ['id', 'product_name']
			}
		]
	})
		.then(data => res.json(data))
		.catch(err => {
			res.status(401).json(err);
		});
});

router.post('/', (req, res) => {
  const body = req.body
  const name = req.body.category_name
  // create a new category with format:
  // {
  //   "category_name": "name"
  // }

  Category.create({
    category_name: name
  }).then(data => res.json(data))
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  const updateId = req.params.id
  const update = req.body

  // format:
  // {
  //   "category_name": "name"
  // }

  Category.update(update, {
    where: { id: updateId}
  }).then(data => {
    if (! data.length > 0) {
      res.status(404).json({'Message': 'There is no category with that id'})
    }
    res.json(data)
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  const deleteId = req.params.id
  Category.destroy({
		where: { id: deleteId }
	}).then(data => {
		if (!data) {
			res.status(404).json({ message: 'There is no category with that id' });
			return;
		}
		res.json(data);
	});
});

module.exports = router;
