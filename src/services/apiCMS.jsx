const token = import.meta.env.VITE_API_TOKEN;

export function getAllProjects(setProjetos, setLoading) {
  return fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query:
        "{ allProjects { id cardImage{url} cardTitle cardDescription livePreview githubPreview stackPreview galeryProjects{url} } }",
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      setProjetos(res.data.allProjects);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
    });
}
