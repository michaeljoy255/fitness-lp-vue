/**
 * Dates mixin for various user facing date elements
 */
export const datesMixin = {
  methods: {
    /**
     * Outputs a long formatted long date string
     * @returns {string} Date string formatted to: <WeekDay Month Date, Year>
     */
    getLongDateMixin() {
      return `${this.getDayMixin(
        new Date().getUTCDay(new Date().toLocaleDateString())
      )} ${this.getMonthMixin(
        new Date().getUTCMonth(new Date().toLocaleDateString())
      )} ${new Date(new Date().toLocaleDateString()).getUTCDate()}, ${new Date(
        new Date().toLocaleDateString()
      ).getUTCFullYear()}`;
    },

    /**
     * Returns the current month of the year based on the number passed in
     * @param {number} monthNumber 1 to 12 (1 is January)
     * @returns {string} Current calendar month
     * @example
     * let ex = getMonthMixin(new Date().getUTCMonth(new Date().toLocaleDateString()));
     */
    getMonthMixin(monthNumber) {
      switch (monthNumber) {
        case 1:
          return "January";
        case 2:
          return "February";
        case 3:
          return "March";
        case 4:
          return "April";
        case 5:
          return "May";
        case 6:
          return "June";
        case 7:
          return "July";
        case 8:
          return "August";
        case 9:
          return "September";
        case 10:
          return "October";
        case 11:
          return "November";
        case 12:
          return "December";
        default:
          break;
      }
    },

    /**
     * Returns the current day of the week based on number passed in
     * @param {number} dayNumber 0 to 6 (0 is Sunday)
     * @returns {String} Current day of the week
     * @example
     * let ex = getDayMixin(new Date().getUTCDay(new Date().toLocaleDateString()));
     */
    getDayMixin(dayNumber) {
      switch (dayNumber) {
        case 0:
          return "Sunday";
        case 1:
          return "Monday";
        case 2:
          return "Tuesday";
        case 3:
          return "Wednesday";
        case 4:
          return "Thursday";
        case 5:
          return "Friday";
        case 6:
          return "Saturday";
        default:
          break;
      }
    }
  }
};
