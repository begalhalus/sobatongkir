import { APP_URL, API_URL } from "@globals";

export async function fetchData<Selected extends any>(endpoint: Selected) {
  const apiEndpoint = `${APP_URL}${endpoint}`;

  console.info(`Fetching ${apiEndpoint}…`);
  return fetch(apiEndpoint)
    .then((r) => r.json() as Promise<ReturnType<any[Selected]>>)
    .catch((e) => {
      console.error(e);
      throw Error("Invalid API data!");
    });
}
function getCookie(name) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}

// NOTE: These helpers are useful for unifying paths, app-wide
export function url(path = "") {
  return `${import.meta.env.SITE}${import.meta.env.APP_URL}${path}`;
}

// TODO: Remove old local assets from git history (to make cloning snappier).
export function asset(path: string) {
  // NOTE: Fetching remote assets from the Hugo admin dashboard Vercel dist.
  return `${API_URL}/${path}`;
}
