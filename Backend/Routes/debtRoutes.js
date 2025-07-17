import express from 'express';
import Debt from '../Models/Debt.js';

const router=express.Router();

router.post('/', async (req, res) => {
  console.log('Received debt:', req.body)
  try {
    const newDebt = new Debt(req.body)
    const savedDebt = await newDebt.save()
    console.log('Saved debt:', savedDebt)
    res.status(201).json(savedDebt)
  } catch (error) {
    console.error('Error saving debt:', error)
    res.status(500).json({ error: 'Failed to save debt' })
  }
})


router.get('/', async (req, res) => {
  try {
    const debts = await Debt.find()
    res.json(debts)
  } catch (error) {
    res.status(500).json({ error: 'Failed to get debts' })
  }
})


router.put('/:id', async(req, res)=>{
     const Updated= await Debt.findByIdAndUpdate(req.params.id, req.body, {new:true})
     res.json(Updated);
})

router.delete('/:id', async(req, res)=>{
    await Debt.findByIdAndDelete(req.params.id)
    res.json({success:true})
})

export default router