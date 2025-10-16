import mongoose from 'mongoose';
const SectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  order: { type: Number, default: 0 },
  visible: { type: Boolean, default: true },
  version: { type: String }
}, { timestamps: true });
export const SectionModel = mongoose.model('Section', SectionSchema);
