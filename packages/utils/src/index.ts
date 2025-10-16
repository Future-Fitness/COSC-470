export const required = (name: string, v?: string) => {
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
};
