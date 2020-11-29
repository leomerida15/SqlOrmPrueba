const token = require('../configs/token');
const error = require('../middlewares/error/error');
const valid_data = require('../middlewares/data');

const dashboard = async (req, res) => {
	try {
		const { access_token } = req.headers;

		const valid_token = await token.valid(access_token);
		if (!valid_token) throw { message: 'Debe suministrar un Token valido', code: 400 };

		res.status(200).json({
			message: 'Indicadores del dashboard',
			data: {
				general: [
					{
						title: 'Espacios turisticos',
						quantity: 15,
						class: 'photo-container bg-success',
						description: 'Cantidad de Espacios turísticos más visitados',
					},
					{
						title: 'Productos',
						quantity: 50,
						class: 'photo-container bg-info',
						description: 'Cantidad de Productos más buscados',
					},
					{
						title: 'Excursiones',
						quantity: 10,
						class: 'photo-container bg-danger',
						description: 'Cantidad de Excursiones más solicitadas',
					},
				],
				activities: [
					{
						rol: {
							_id: '1',
							name: 'Administrador',
						},
						data: [
							{
								title: 'OPERADORES',
								quantity: 15,
								class: 'photo-container bg-success',
								description: 'Cantidad de Operadores registrados',
							},
							{
								title: 'TURISTAS',
								quantity: 50,
								class: 'photo-container bg-info',
								description: 'Cantidad de Turistas registrados',
							},
							{
								title: 'MEMBRESÍAS',
								quantity: 10,
								class: 'photo-container bg-danger',
								description: 'Cantidad de Membresías activas',
							},
							{
								title: 'PAGOS',
								quantity: 65,
								class: 'photo-container bg-warning',
								description: 'Cantidad de Pagos efectivos procesados',
							},
							{
								title: 'Destinos',
								quantity: 65,
								class: 'photo-container bg-success',
								description: 'Cantidad de Destinos registrados y activos',
							},
							{
								title: 'Excursiones',
								quantity: 65,
								class: 'photo-container bg-info',
								description: 'Cantidad de Excursiones presentes y activos',
							},
							{
								title: 'Reservaciones',
								quantity: 10,
								class: 'photo-container bg-danger',
								description: 'Cantidad de Reservaciones activas',
							},
						],
					},
					{
						rol: {
							_id: '2',
							name: 'Operador Turístico',
						},
						data: [
							{
								title: 'Turistas',
								quantity: 15,
								class: 'photo-container bg-success',
								description: 'Cantidad de Turistas registrados',
							},
							{
								title: 'Destinos',
								quantity: 50,
								class: 'photo-container bg-info',
								description: 'Cantidad de Destinos registrados y activos',
							},
							{
								title: 'Excursiones',
								quantity: 50,
								class: 'photo-container bg-danger',
								description: 'Cantidad de Excursiones presentes y activos',
							},
							{
								title: 'Reservaciones',
								quantity: 65,
								class: 'photo-container bg-warning',
								description: 'Cantidad de Reservaciones activas',
							},
						],
					},
					{
						rol: {
							_id: '3',
							name: 'Turista',
						},
						data: [
							{
								title: 'Destinos visitados',
								quantity: 15,
								class: 'photo-container bg-success',
								description: 'Cantidad de Destinos visitados por el Usuario',
							},
							{
								title: 'Excursiones efectuadas',
								quantity: 50,
								class: 'photo-container bg-info',
								description: 'Cantidad de Excursiones efectuadas por el Usuario',
							},
							{
								title: 'Destinos presentes',
								quantity: 50,
								class: 'photo-container bg-danger',
								description: 'Cantidad de Destinos presentes',
							},
							{
								title: 'Excursiones disponibles',
								quantity: 65,
								class: 'photo-container bg-warning',
								description: 'Cantidad de Excursiones disponibles',
							},
						],
					},
				],
			},
		});
	} catch (err) {
		error(req, res, err);
	}
};

module.exports = dashboard;
