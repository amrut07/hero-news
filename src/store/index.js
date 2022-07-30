import { createStore } from "vuex";
import { getHeader, getArticle, getPopularNews } from "@/services/news-service";

// We can create different modules for Header, Article, popular news, user details, subscription.
// For now I'm creating simple store that will fetch and store the project related information.
// We can go with modular approach, having separate modules for user, article and sidebar popular news
const Store = createStore({
  state() {
    return {
      heroNews: {
        header: [],
        article: [],
        popularNews: {},
      },
      user: "", // user information, email, name, id etc
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setHeader(state, payload) {
      state.heroNews.header = payload;
    },
    setArticle(state, payload) {
      state.heroNews.article = payload;
    },
    setPopularNews(state, payload) {
      state.heroNews.popularNews = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async getHeader({ commit }) {
      const data = await getHeader();
      if (data) {
        commit("setHeader", data);
        commit("setUser", "Amrut");
      }
    },
    async getArticle({ commit }) {
      const data = await getArticle();
      if (data) {
        commit("setArticle", data);
      }
    },
    async getPopularNews({ commit }) {
      const data = await getPopularNews();
      if (data) {
        commit("setPopularNews", data);
      }
    },
  },
});

export default Store;
