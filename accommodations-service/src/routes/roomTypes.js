const express = require('express');
const RoomType = require('../models/RoomType');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const roomType = await RoomType.create(req.body);
        res.status(201).json(roomType);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const roomType = await RoomType.findByPk(req.params.id);
        if (roomType) {
            await roomType.update(req.body);
            res.json(roomType);
        } else {
            res.status(404).json({ error: 'Room type not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
