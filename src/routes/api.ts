import express, { Request, Response } from 'express';
import Counter from '../models/Counter';

const router = express.Router();

router.get('/counters', async (req: Request, res: Response) => {
  try {
    const { name } = req.query;
    let query = {};

    if (name) {
      query = { name: new RegExp(name as string, 'i') };
    }

    const counters = await Counter.find(query);
    res.json(counters);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: (err as Error).message });
  }
});

router.get('/counters/:id', async (req: Request, res: Response) => {
  try {
    const query = { _id: req.params.id };

    const counters = await Counter.find(query);
    res.json(counters);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: (err as Error).message });
  }
});

router.post('/counters', async (req: Request, res: Response) => {
  const counter = new Counter(req.body);
  try {
    const newCounter = await counter.save();
    res.status(201).json(newCounter);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: (err as Error).message });
  }
});

router.put('/counters/:id', async (req: Request<{ id: string }>, res: Response) => {
  try {
    const updatedCounter = await Counter.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCounter) return res.status(404).json({ message: 'Counter not found' });
    res.json(updatedCounter);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: (err as Error).message });
  }
});

router.delete('/counters/:id', async (req: Request<{ id: string }>, res: Response) => {
  try {
    const counter = await Counter.findByIdAndDelete(req.params.id);
    if (!counter) return res.status(404).json({ message: 'Counter not found' });
    res.json({ message: 'Counter deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: (err as Error).message });
  }
});

export default router;
