export const PROJECTS_QUERY = `
  *[_type == "project" && !(_id in path("drafts.**"))]{
    _id,
    title,
    description,
    summary,
    githubUrl,
    liveUrl,
    tags,
    category,
    status,
    clientName,
    technologies,
    features,
    images,
    createdAt,
    updatedAt,
    "slug": slug.current
  } | order(createdAt desc)
`;

export const SERVICES_QUERY = `
  *[_type == "service" && !(_id in path("drafts.**"))]{
    _id,
    title,
    description,
    details,
    createdAt,
    updatedAt
  } | order(createdAt desc)
`;