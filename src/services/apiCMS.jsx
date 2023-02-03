const token = `${import.meta.env.VITE_DATOCMS_ACCESS_TOKEN}`;

export function getAllContent() {
  return fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: "{ allProjects { id cardImage{url} cardTitle cardDescription } }",
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
