const categoryRepository = require("../../repository/CategoryRepository");

exports.readAll = async () => {
    const categories = await categoryRepository.readAll();
    const result = Array();

    categories.forEach(category => {
        result.push({ id: category.id, ...category.data() });
    });

    return result;
};