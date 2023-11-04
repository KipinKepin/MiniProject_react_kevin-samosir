import { Op } from "sequelize";
import History from "../models/HistoryModel.js";
import User from "../models/UserModel.js";

export const getHistories = async (req, res) => {
    try {
        let response;
        if (req.role === "admin") {
            response = await History.findAll({
                attributes: ['uuid', 'command'],
                include: [{
                    model: User,
                    attributes: ['name', 'email', 'role']
                }]
            })
        }
        else {
            response = await History.findAll({
                attributes: ['uuid', 'command'],
                where: {
                    userId: req.userId
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email', 'role']
                }]
            })
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const getHistoryById = async (req, res) => {
    try {
        const history = await History.findOne(({
            where: {
                uuid: req.params.id
            }
        }))
        if (!history) return res.status(404).json({ msg: "data tidak ditemukan" })
        let response;
        if (req.role === "admin") {
            response = await History.findOne({
                attributes: ['uuid', 'command'],
                where: {
                    id: history.id
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email', 'role']
                }]
            })
        }
        else {
            response = await History.findOne({
                attributes: ['uuid', 'command'],
                where: {
                    [Op.and]: [{ id: product.id }, { userId: req.userId }]
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email', 'role']
                }]
            })
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}
export const createHistory = async (req, res) => {
    const { command } = req.body
    try {
        await History.create({
            command: command,
            userId: req.userId
        })
        res.status(201).json({ msg: "History berhasil dibuat" })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const deleteHistory = async (req, res) => {
    try {
        const history = await History.findOne({
            where: {
                uuid: req.params.id
            }
        })
        if (!history) return res.status(404).json({ msg: "Data history tidak ditemukan" })
        const { command } = req.body

        if (req.role === "admin") {
            await History.destroy({
                where: {
                    id: history.id
                }
            })
        }
        else {
            if (req.userId !== history.userId) return res.status(403).json({ msg: "Akses terlarang" })
            await History.destroy({
                where: {
                    [Op.and]: [{ id: history.id }, { userId: req.userId }]
                }
            })
        }
        res.status(200).json({ msg: "History dihapus" })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}