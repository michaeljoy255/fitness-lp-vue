const ActiveService = {
  /**
   * Get active workout from storage
   * @returns {Promise<Array>} Active workout
   */
  get() {
    return new Promise(resolve => {
      resolve(JSON.parse(localStorage.getItem("active")));
    });
  },

  /**
   * Update active workout in storage
   * @returns {Promise<string>} true
   */
  update() {
    return new Promise(resolve => {
      console.error("@todo: ActiveService update not implmented!");
      resolve(true);
    });
  },

  /**
   * Delete active workout from storage
   * @returns {Promise<string>} true
   */
  delete() {
    return new Promise(resolve => {
      localStorage.removeItem("active");
      resolve(true);
    });
  }
};

export default ActiveService;
