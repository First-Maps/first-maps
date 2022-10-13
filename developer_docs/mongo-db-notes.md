# Mongo DB

in mongodb you have collections and databases. 
collections are what we call tables in mySQL

drop databases
```js
db.dropDatabase()
```

In mongoDB, if you ask it to do something that doesn't exist, it will create it for you.

enter terminal (aka mongo shell) Need to install first
``` monghsh ```

### inserting one object

```
db.users.insertOne({ name: "John" })
```

### inserting many objects

```js
db.users.insertManu([
    {},
    {},
    {}
])
```



### finding an object 

```js
db.users.find() 
```


## Documents

When you insert into mongoDB, you do not need to define columns and tables, you just insert.
every object you store inside mongoDB is called a document.

documents live in collections, collections live inside databases

because there are no tables, documents you add into collections do not need to have the same fields


## Nesting 
MongoDB is based off of objects. You can nest things inside each other 


## Querying

### limiting to a certain number of results

```js
db.users.find().limit(2)
```

### return the results in sorted order

```js 
db.users.find().sort({ name: 1 })
```

if you pass in '1', it will sort in ascending(alphabetical) order
if you pass in '-1', it will sort in descending order

you can also sort by multiple fields at once

```js
db.users.find().sort({ name: 1, age: -1 })
```

### querying, but only returning certain fields
ex. find the one where the name is kyle, but only return the name and age

```js
db.users.find({ name: "Bob"}, { name:1, age: 1})
```

if you dont want something returned, put underscore in front of it and set it to zero

```js
db.users.find({ name: "Bob"}, { name:1, age: 1, _id: 0 })
```

if you want all the fields except age, set age to zero

```js
db.users.find({ name: "Bob"}, { age: 0 })
```



# locationsOfInterest schema
This is a schema that was build for the app. 


### inserting into locationsOfInterest schema


to insert a location of interest, make sure your JSON follows this format: 

```JSON
{
  "name":"Squamish Village",
  "description": "a village",
  "category": "settlement",
  "coordinates": [49.234522, 122.446365]
}
```

### conventions around geoJSON
longitude first, then latitude. Lonsdale Quay in Vancouver would be: 
-123.074130, 49.309036

Note: this is opposite to the normal convention pretty much everywhere else.

the real one