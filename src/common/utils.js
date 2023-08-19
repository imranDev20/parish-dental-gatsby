import slugify from "slugify";

export function customSlugify(text) {
  if (!text || text === "") {
    return;
  }

  const newStr = text.replace(/(\d+)/g, " $1");

  const slug = slugify(newStr, {
    replacement: "-",
    remove: undefined,
    lower: true,
    strict: true,
    locale: "vi",
    trim: true,
  });

  return slug;
}
