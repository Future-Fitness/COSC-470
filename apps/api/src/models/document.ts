import mongoose from 'mongoose';
const DocumentSchema = new mongoose.Schema({
  subsectionId: { type: mongoose.Types.ObjectId, ref: 'Subsection', required: true },
  title: { type: String, required: true },
  slug: { type: String, required: true },
  status: { type: String, enum: ['draft', 'review', 'published'], default: 'draft' },
  tags: [String],
  authors: [String],
  sources: { docxKey: String, pdfKey: String },
  pdfKey: String,
  htmlBundleKey: String,
  manifestVersion: String
}, { timestamps: true });
export const DocumentModel = mongoose.model('Document', DocumentSchema);
