const response = (statusCode, message, data, res) => {
  res.json(statusCode, {
    message,
    payload: data,
    metadata: {
      prev: "",
      next: "",
      current: "",
    },
  });
};

module.exports = response;
