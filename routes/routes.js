const express = require('express');
const router = express.Router();
const Model = require('../model/model')

//post method
router.post('/post', async (req, res) => {
    const data = new Model({
        employer: req.body.employer,
        job_title: req.body.job_title,
        length_in_pos: req.body.length_in_pos,
        description: req.body.description
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }

});

//get all
router.get('/getAll', async(req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
});

//get by ID method
router.get('/getOne/:id', async(req, res) => {
    try {
        const data = await Model.findOne({ _id: req.params.id });
        res.json(data)
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
});

//update by ID method
router.patch('/update/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )
        res.send(result)
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
});

//delete by ID method
router.delete('/delete/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id);
        res.send('Record ${data.job_title} has been deleted')
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
});


module.exports = router;