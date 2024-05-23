import Tenis from '../models/Tenis.js';

export const getAllTenis = async (req, res) => {
  try {
    const tenis = await Tenis.findAll();
    res.json(tenis);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addTenis = async (req, res) => {
  const { nombre, marca, tallas, cantidad, precio } = req.body;
  try {
    const newTenis = await Tenis.create({ nombre, marca, tallas, cantidad, precio });
    res.status(201).json(newTenis);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateTenis = async (req, res) => {
  const { nombre, marca, tallas, cantidad, precio } = req.body;
  const id = req.params.id;
  try {
    const [updatedRows] = await Tenis.update({ nombre, marca, tallas, cantidad, precio }, { where: { id } });
    if (updatedRows === 0) {
      res.status(404).json({ message: 'Tenis no encontrado' });
    } else {
      res.json({ message: 'Tenis actualizado correctamente' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteTenis = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedRows = await Tenis.destroy({ where: { id } });
    if (deletedRows === 0) {
      res.status(404).json({ message: 'Tenis no encontrado' });
    } else {
      res.json({ message: 'Tenis eliminado correctamente' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
