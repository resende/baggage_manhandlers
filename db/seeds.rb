# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
  

Item.delete_all 

Item.create(name: 'test1', weight: 5, image: 'beachtowel.png' )
Item.create(name: 'test2', weight: 10, image: 'camera.png')




