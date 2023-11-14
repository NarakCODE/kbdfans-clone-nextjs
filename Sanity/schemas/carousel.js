export default {
   name: 'carouselImage',
   type: 'document',
   title: 'Carousel Image',
   fields: [
     {
       name: 'name',
       type: 'string',
       title: 'Name of Carousel Image',
     },
     {
       name: 'carouselImages',
       type: 'array',
       title: 'Carousel Images',
       of: [{type: 'image'}],
     },
   ],
 }
 