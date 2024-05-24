import Tenis from '../models/Tenis.js';

export const getAllTenis = async (req, res) => {
  try {
    const tenis = await Tenis.find();
    res.json(tenis);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getTenis = async (req, res) => {
  try {
    const tenis = await Tenis.findById(req.params.id);
    if (!tenis) {
      res.status(404).json({ message: 'Tenis no encontrado' });
      return;
    }
    res.json(tenis);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addTenis = async (req, res) => {
  try {
    const newTenis = new Tenis(req.body);
    await newTenis.save();
    res.status(201).json(newTenis);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateTenis = async (req, res) => {
  const id = req.params.id;
  try {
    const tenis = await Tenis.findByIdAndUpdate(id, req.body);
    if (!tenis) {
      res.status(404).json({ message: 'Tenis no encontrado' });
      return;
    }
    res.json({ message: 'Tenis actualizado correctamente' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteTenis = async (req, res) => {
  const id = req.params.id;
  try {
    const tenis = await Tenis.findByIdAndDelete(id);
    if (!tenis) {
      res.status(404).json({ message: 'Tenis no encontrado' });
      return;
    }
    res.json({ message: 'Tenis eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
