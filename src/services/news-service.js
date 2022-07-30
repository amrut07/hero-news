import axios from "axios";

// Fetch the initial header require to setup the page header
export async function getHeader() {
  const { data } = await axios.get("/data/header.json");
  return data;
}

// We might need to fetch the article based on the article ids
// That will allow us to fetch particular id, even if user select any other article from the list
export async function getArticle(id) {
  console.log("Article Id: ", id);
  const { data } = await axios.get("/data/article-316751.json");
  return data;
}

// Get Popular news, that could be eye catching to user and might have high hit ratio
export async function getPopularNews() {
  const { data } = await axios.get("/data/sideBar_popular.json");
  return data;
}
