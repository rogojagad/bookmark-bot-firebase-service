const db = require('./../entity/Firebase')
const transformer = require('./../transformer/BookmarkTransformer')
const buildMetaDataService = require('./../service/BuildMetaDataService')

exports.readByCategories = (categories, res) => {
    db.collection('sites').where('category', 'in', categories).get()
        .then(bookmarks => {
            let result = Array()

            bookmarks.forEach(bookmark => {
                result.push(bookmark.data())
            })

            let metaData = buildMetaDataService.buildCountPerCategoryMetaData(categories, result)

            transformer.transformGetByCategories(result, metaData, res)
        })
}

exports.readAll = (res) => {
    db.collection('sites').get()
        .then(bookmarks => {
            let result = Array()

            bookmarks.forEach(bookmark => {
                result.push(bookmark.data())
            })

            let metaData = buildMetaDataService.buildCountMetaData(result.length)

            transformer.transformGetIndex(result, metaData, res)
        })
}