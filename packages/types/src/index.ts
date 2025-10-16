export type Section = { _id: string; title: string; slug: string; order: number; visible: boolean; version?: string; };
export type Subsection = { _id: string; sectionId: string; title: string; slug: string; order: number; visible: boolean; version?: string; };
export type DocStatus = "draft" | "review" | "published";
export type Document = {
  _id: string; subsectionId: string; title: string; slug: string; status: DocStatus;
  tags?: string[]; authors?: string[];
  sources?: { docxKey?: string; pdfKey?: string };
  pdfKey?: string; htmlBundleKey?: string; manifestVersion?: string; updatedAt?: string;
};
export type ManifestItem = { docId: string; slug: string; pdfKey?: string; htmlBundleKey?: string; hash: string; };
export type Manifest = { version: string; items: ManifestItem[]; createdAt: string; };
