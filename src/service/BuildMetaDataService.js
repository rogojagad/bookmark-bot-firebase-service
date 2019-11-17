exports.buildCountMetaData = (count) => {
    let metaData = Object();

    metaData.count = count;

    return metaData;
}

exports.buildCountPerCategoryMetaData = (categories, results) => {
    let metaData = Object()
    metaData.count = Object()

    for (const category of categories) {
        metaData.count[category] = 0
    }

    for (const result of results) {
        metaData.count[result.category] += 1
    }

    return metaData
}