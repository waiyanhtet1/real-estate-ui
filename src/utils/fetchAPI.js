export const fetchAPI = async (url, method, body) => {
  const res = await fetch(url, {
    method: `${method ? method : ""}`,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const json = await res.json();
  return json;
};
