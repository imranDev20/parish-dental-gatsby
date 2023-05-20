import slugify from "slugify";

export function customSlugify(text) {
  if (!text || text === "") {
    return;
  }
  const slug = slugify(text, {
    replacement: "-",
    remove: undefined,
    lower: true,
    strict: false,
    locale: "vi",
    trim: true,
  });

  return slug;
}
