const configs = {
  development: {
    SERVER_URI: "http://localhost:5000",
  },
  production: {
    SERVER_URI: "https://real-estate-backend-vwr6.onrender.com",
  },
};

export default configs[process.env.NODE_ENV];

// module.exports.config = configs[process.env.NODE_ENV];
