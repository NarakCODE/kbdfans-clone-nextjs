export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Product Name',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Product Images',
      of: [{type: 'image'}],
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'category',
      title: 'Product Category',
      type: 'reference',
      to: [{type: 'category'}],
    },
    {
      name: 'description',
      type: 'array',
      title: 'Product Description',
      of: [{type: 'block'}],
    },
  ],
}
