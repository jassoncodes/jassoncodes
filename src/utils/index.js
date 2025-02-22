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
