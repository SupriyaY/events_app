# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'people.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
    p = People.new
    p.first_name = row['first_name']
    p.last_name = row['last_name']
    p.email = row['email']
    p.gender = row['gender']
    p.city = row['city']
    p.street = row['street']
    p.state = row['state']
    p.country = row['country']
    p.languate = row['language']
    p.birthdate = row['birthdate']
    p.save
    puts "#{p.first_name}, #{p.last_name}, #{p.email}, #{p.gender}, #{p.city}, #{p.street}, #{p.state}, 
    #{country}, #{language}, #{birthdate} saved"
end  



csv_text = File.read(Rails.root.join('lib', 'seeds', 'events.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  e = Events.new
    e.name = row['name']
    e.location = row['location']
    e.price = row['price']
    e.date = row['date']
    e.save
    puts "#{e.name}, #{e.location}, #{e.price}, #{e.date}"
end










