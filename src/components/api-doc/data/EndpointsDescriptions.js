export const ENDPOINTS_INFO = {
  about: {
    path: "/api/about",
    description:
      "This endpoint will get the information displayed in the About me section. Below is an example of the raw data returned by the API.",
  },
  contact: {
    description:
      'This endpoint returns all the information rendered in the <Link className="text-decoration-none fw-bold text-dark" to={"/contact"}>Contact </Link> section.</p><p>Below is an example of the information returned by the API.</p>',
  },
  experience: {
    description:
      "<p>This endpoint will get the information regarding my previous experience in corporate IT.</p><p>Below is an example of the raw data returned by the API.</p>",
  },
  projects: {
    description:
      "<p>This endpoint returns the information about the projects I have worked with or collaborated.</p><p>Below is an example of the raw data returned by the API.</p>",
  },
  study: {
    description:
      "<p>This endpoint will get the information regarding my previous experience in corporate IT.</p><p>Below is an example of the raw data returned by the API.</p>",
  },
  me: {
    path: "api/me",
    description:
      "This endpoint gets all the information rendered in my live resume. Below is an example of the raw data returned by the API.",
  },
};
