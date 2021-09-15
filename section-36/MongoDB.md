# Section 36: MongoDB
## , Installation, Starting & Stopping MongoDB
- Installation: `brew install mongodb-community@5.0`
- Start: `brew services start mongodb-community@5.0`
- Stop: `brew services stop mongodb-community@5.0`

## Basic CRUD Operations
- db.collection.insertOne()
- show collections
- db.collection.find()
- db.collection.find({age: 12})

## Insertion
- db.collection.insertOne()
- db.collection.insertMany()

## Update
- db.collection.updateOne(<filter>. <update>)
- db.collection.updateMany(<filter>, <update>)

## Delete
- db.collection.deleteMany()
- db.collection.deleteOne()
  
## Query Selectors
- $gt - Greater than
- $gte - Greater than or equal to
- $in - Matches anything included in array
