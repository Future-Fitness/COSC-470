import { Router } from 'express';
import { SectionModel } from '../models/section.js';
import { SubsectionModel } from '../models/subsection.js';
import { DocumentModel } from '../models/document.js';

export const router = Router();

// minimal CRUD examples
router.get('/sections', async (_req, res) => {
  const items = await SectionModel.find().sort({ order: 1 });
  res.json(items);
});

router.post('/sections', async (req, res) => {
  const { title, slug, order = 0, visible = true } = req.body || {};
  const item = await SectionModel.create({ title, slug, order, visible });
  res.status(201).json(item);
});

router.get('/subsections', async (req, res) => {
  const { sectionId } = req.query;
  const q: any = sectionId ? { sectionId } : {};
  const items = await SubsectionModel.find(q).sort({ order: 1 });
  res.json(items);
});

router.post('/documents', async (req, res) => {
  const doc = await DocumentModel.create(req.body);
  res.status(201).json(doc);
});

router.get('/documents/:id', async (req, res) => {
  const doc = await DocumentModel.findById(req.params.id);
  if (!doc) return res.status(404).end();
  res.json(doc);
});

export default router;
