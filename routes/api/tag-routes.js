const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price'],
        through: ProductTag,
        as: 'tag_products'
      }
    ]
  }).then(data => res.json(data)).catch(err => {
    res.status(401).json(err)
  })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const findId = req.params.id
  Tag.findOne({
    where: {id: findId},
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price'],
        through: ProductTag,
        as: 'tag_products'
      }
    ]
  }).then(data => res.json(data)).catch(err => res.status(401).json(err))
});

router.post('/', (req, res) => {
  // create a new tag with format:
    // {
    //   "tag_name": "name"
    // }

  Tag.create({
    tag_name: req.body.tag_name
  }).then(data => res.json(data)).catch(err => {
    res.status(401).json(err)
  })
});

router.put('/:id', (req, res) => {{}
  // update a tag's name by its `id` value
  const updateId = req.params.id
  Tag.update(req.body, {
		where: { id: updateId }
	}).then(data => {
		if (!data.length > 0) {
			res.status(404).json({ message: `No tag found with id ${updateId}` });
			return;
		}
		res.json(data);
	});
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  const deleteId = req.params.id
  Tag.destroy({
		where: { id: deleteId}
	}).then(data => {
		if (!data) {
			res.status(404).json({ message: `No tag found with id ${deleteId}` });
			return;
		}
		res.json(data);
	});
});

module.exports = router;
