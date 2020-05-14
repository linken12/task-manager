const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'text-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect database')
    }

    const db = client.db(databaseName)
    // db.collection('users').insertOne({
    //     name: 'linken',
    //     age:29
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to connect user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('task-manager').insertMany([
    //     {
    //         description: 'clean house',
    //         status: true
    //     }, {
    //         description: 'study',
    //         status: false
    //     }, {
    //         description: 'learn english',
    //         status: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         console.log('Unable to insert users')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').findOne({_id: new ObjectID('5eb98cfa8c48ec16000df426')}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to featch')
    //     }

    //     console.log(user)
    // })

    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID('5eb98cfa8c48ec16000df426')
    // }, {
    //     $set: {
    //         name: 'balram'
    //     }
    // })

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // const updateMany = db.collection('task-manager').updateMany({
    //     status: false
    // }, {
    //     $set: {
    //         status: true
    //     }
    // })

    // updateMany.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('users').deleteMany({
        age: 29
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})