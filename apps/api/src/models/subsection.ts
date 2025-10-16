import mongoose from 'mongoose';
const SubsectionSchema = new mongoose.Schema({
  sectionId: { type: mongoose.Types.ObjectId, ref: 'Section', required: true },
  title: { type: String, required: true },
  slug: { type: String, required: true },
  order: { type: Number, default: 0 },
  visible: { type: Boolean, default: true },
  version: { type: String }
}, { timestamps: true });
export const SubsectionModel = mongoose.model('Subsection', SubsectionSchema);
