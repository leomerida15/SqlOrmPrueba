const profile = ['email', 'given_name', 'family_name'];

module.exports = [
	{ key: 'isNewUser' },
	{
		key: 'profile',
		valid: (item) => {
			const keys = Object.keys(item);
			const valid = profile.filter((e) => keys.indexOf(e) != -1);

			return valid.length > 0 ? false : true;
		},
	},
];
