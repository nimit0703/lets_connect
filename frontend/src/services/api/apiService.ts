import api from "./siteconfig.js";

const apiRequest = {
  register(user: any) {
    return api.post("register", user);
  },

  login(user: any) {
    return api.post("login", user).then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
  },

  logout() {
    localStorage.removeItem("user");
  },

  // Additional API methods if needed
  changePassword(data:any) {
    return api.post("/change-password", data);
  },

  setMailPasswordRequest(data:any) {
    return api.post("/mail-password-request", data);
  },

  forgotPasswordRequest(data:any) {
    return api.post("/forgot-password-request", data);
  },
};

export default apiRequest;
