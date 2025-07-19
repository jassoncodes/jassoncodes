export const capitalize = (s) =>
  s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

export const getData = async (apiRoute) => {
  try {
    const dataReq = await fetch(apiRoute);
    if (dataReq.status === 404) {
      return "Error: No information found";
    } else if (dataReq.status === 204) {
      return "Error: No content found";
    } else {
      const data = await dataReq.json();
      return data;
    }
  } catch (err) {
    return `Error while fetching API: ${err.message}`;
  }
};

export const getApiURL = (endpoint) => {
  const host = import.meta.env.VITE_API_APP_HOST;
  const port = import.meta.env.VITE_API_APP_PORT;

  let apiRoute = host;
  if (port) {
    apiRoute += `:${port}`;
  } else {
    apiRoute += endpoint;
  }
  return apiRoute;
};
