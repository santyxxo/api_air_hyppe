import mongoose from 'mongoose';

const tenisSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  marca: {
    type: String,
    required: true
  },
  tallas: {
    type: String,
    required: true
  },
  cantidad: {
    type: Number,
    required: true
  },
  precio: {
    type: Number,
    required: true
  }
});

const Tenis = mongoose.model('Tenis', tenisSchema);

export default Tenis;
