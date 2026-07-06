const express = require('express');
const router = express.Router();
const connectDB = require('../db');
const { ObjectId } = require('mongodb');

// GET all contacts
router.get('/', async (req, res) => {
    try {
        const db = await connectDB();
        const contacts = await db.collection('contacts').find().toArray();
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET single contact by id
router.get('/:id', async (req, res) => {
    try {
        const db = await connectDB();
        const contact = await db.collection('contacts').findOne({ _id: new ObjectId(req.params.id) });
        if (!contact) {
            return res.status(404).json({ error: 'Contact not found' });
        }
        res.json(contact);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;