const createHashService = require('./../CreateHashService');
const categoryRepository = require('../../repository/CategoryRepository');

exports.createOne = async (data) => {
    const name = data.name.trim();
    const id = createHashService.create(name);

    if (await validateUniqueCategory(id)) {
        throw Error(`Category ${name} already exists`);
    }

    await categoryRepository.createOne(id, data);

    return id;
};

const validateUniqueCategory = async (id) => {
    const category = await categoryRepository.readOneById(id);

    return category ? true : false;
};