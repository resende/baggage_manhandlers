# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
  

Item.delete_all 

Item.create(name: 'beachtowel', weight: 0.5, image: 'beachtowel.png' )
Item.create(name: 'book', weight: 2, image: 'book.png')
Item.create(name: 'brick_coke', weight: 5, image: 'brick_coke.png')
Item.create(name: 'camera', weight: 3, image: 'camera.png')
Item.create(name: 'foldedjeans', weight: 1, image: 'foldedjeans.png')
Item.create(name: 'laptop', weight: 3, image: 'laptop.png')
Item.create(name: 'rubber_ring', weight: 1, image: 'rubber_ring.png')
Item.create(name: 'shirts', weight: 1, image: 'shirts.png')
Item.create(name: 'trainers', weight: 1.5, image: 'trainers.png')
Item.create(name: 'tshirt', weight: 0.5, image: 'tshirt.png')
Item.create(name: 'washbag', weight: 2, image: 'washbag.png')

