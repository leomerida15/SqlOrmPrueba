const CryptoJS = require('crypto-js');
const helpers = {};

helpers.matchPassword = async (password, savedPassword) => {
	let password_decrypt = CryptoJS.AES.decrypt(password, 'wannatrip').toString(CryptoJS.enc.Utf8);
	let saved_password_decrypt = CryptoJS.AES.decrypt(
		CryptoJS.AES.decrypt(savedPassword, 'wannatrip').toString(CryptoJS.enc.Utf8),
		'wannatrip'
	).toString(CryptoJS.enc.Utf8);
	return password_decrypt == saved_password_decrypt;
};

helpers.encryptPassword = async (password) => CryptoJS.AES.encrypt(password, 'wannatrip').toString();

module.exports = helpers;
