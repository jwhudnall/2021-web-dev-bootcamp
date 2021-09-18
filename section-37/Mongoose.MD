# Mongoose
## Object Document Mapper
- ODMs used for NoSQL applications
- ORM (Object relation mapper) used for SQL applications

## Searching the DB
### Model.find()
Returns a Promise.
- Return all Movies rated PG-13: `Movie.find({rating: 'PG-13'}).then(data => console.log(data))` 
- Return all Movies produced by 2010: `Movie.find({year: {$gt: 2010}}).then(data => console.log(data))` 

### Model.findById()
Finds a single document by its _id field.
- Return record using ID: `Movie.findById('614461d3a11f29ef1815ab7f').then(data => console.log(data))`