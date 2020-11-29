const models = require('./models/');

const valid_data = async (req, i) => {
	const { body } = req;
	const datos = Object.keys(body);

	const valid = models[i].filter((item) => {
		const reviews = Object.keys(item);
		const validate = reviews.indexOf('valid') != -1 && item.valid(body[item.key]) ? true : false;

		return datos.indexOf(item.key) === -1 || !body[item.key] || !validate;
	});

	Promise.all(valid);

	return valid.lenght > 0 ? false : true;
};

module.exports = valid_data;
