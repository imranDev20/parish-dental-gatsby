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

export function serviceLink(index, service) {
  if (index === 3 || index === 4 || index === 5) {
    return `/services/${customSlugify(service.name)}`;
  } else if (index === 6) {
    return "https://emergency247dentist.co.uk/";
  } else {
    return "/services";
  }
}
