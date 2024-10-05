const uuid = require('uuid')
const ApiError = require('../error/ApiError');
const path = require("path");
const {Device, DeviceInfo} = require('../models/models')

class DeviceController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body
            //npm i express-fileupload для того чтобы получить картинку из файла
            const {img} = req.files
            //uuid.v4() генерация случайных id
            let fileName = uuid.v4() + ".jpg"
            //img.mv помещение файлов в папку static
            //path.resolve адаптирует путь к операционной системе
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const device = await Device.create({name, price, brandId, typeId, img: fileName});

            // if (info) {
            //     info = JSON.parse(info)
            //     info.forEach(i =>
            //         DeviceInfo.create({
            //             title: i.title,
            //             description: i.description,
            //             deviceId: device.id
            //         })
            //     )
            // }

            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {

    }

    async getOne(req, res) {

    }
}

module.exports = new DeviceController()