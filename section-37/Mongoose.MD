# Mongoose
## Object Document Mapper
- ODMs used for NoSQL applications
- ORM (Object relation mapper) used for SQL applications


### Interacting with Mongoose and Mongo
#### Load Mongo from Terminal
From the terminal:
1. `mongo`

#### Load File from Terminal
Loads the file from the command terminal, allowing DB interaction.
1. `node`
2. `.load <filename>`


## Searching the DB
### Model.find()
Returns a Promise.
- Return all Movies rated PG-13: 
    - `Movie.find({rating: 'PG-13'}).then(data => console.log(data))` 
- Return all Movies produced by 2010: 
    - `Movie.find({year: {$gt: 2010}}).then(data => console.log(data))` 

### Model.findById()
Finds a single document by its _id field.
- Return record using ID: `Movie.findById('614461d3a11f29ef1815ab7f').then(data => console.log(data))`

## Updating the DB
- *.updateOne()* - Update the year of the record containing the specified title: 
    - `Movie.updateOne({title: 'Amelie'}, {year: 1999}).then(res => console.log(res))`
- *.updateMany()* - Update the rating for all movies within an array:  
    - `Movie.updateMany({title: {$in: ['Stand By Me', 'Star Wars: A New Hope']}}, {score: 10.0}).then(res => console.log(res))`

## Deleting
- *.removeOne()* - Removes the record. 
    - `Movie.remove({title: 'Amelie'}).then(msg => console.log(msg))`
- *.removeMany()* - Removes all records matching the specified filter.
    - `Movie.deleteMany({year: {$gte: 1999}}).then(msg => console.log(msg))` Deletes all moves produced after 1999 (inclusive)