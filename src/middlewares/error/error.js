const descript = require('./code_descrip');
module.exports = (req, res, error) => {
	code = error.code ? error.code : 500;

	const message = typeof error === 'string' ? error : error.message;
	const code_descript = descript[code];

	const obj = { status: false, message, code, code_descript, path: req.originalUrl, method: req.method };

	if (obj.message.length < 80) console.table([obj]);
	else console.log(obj);

	res.status(500).json(obj);
};
