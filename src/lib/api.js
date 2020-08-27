async function fetchAPI(endpoint = "/") {
  const res = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
    },
  });

  if (res.status !== 200) {
    console.log(await res.text());
    throw new Error("Failed to query API");
  }

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to query API");
  }

  return json;
}

export async function fetchCurrentUser() {
  console.log("fetching user");
  const data = await fetchAPI("/api/user");
  return data;
}

export async function fetchPosts() {
  const data = await fetchAPI("/api/posts");
  return data;
}
