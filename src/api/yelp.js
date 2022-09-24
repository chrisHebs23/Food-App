import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer ieuZqbpwzhft6tFxCyvTUVtwbbERmF1rByGCxmjmfr12fVL8b3B6JKyIWsM1XlFEW-tKRxt3IAPy2tLYgzqcApSIRVBllPpcdoP-jtvu95i2QNDmUurjRWP55kgqY3Yx",
  },
});
