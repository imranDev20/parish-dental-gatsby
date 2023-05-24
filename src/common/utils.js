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

export function serviceLink(index, service) {
  if (index === 4 || index === 5) {
    return `/services/${customSlugify(service.name)}`;
  } else if (index === 6) {
    return "https://emergency247dentist.co.uk/";
  } else {
    return "/services";
  }
}
