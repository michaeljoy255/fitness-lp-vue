/**
 * Formatters mixin for various user facing elements
 */
export const formattersMixin = {
  methods: {
    /**
     * Outputs a long formatted long date string
     * @returns {string} Date string formatted to: <WeekDay Month Date, Year>
     */
    getLongDate() {
      return `${this.getDay()} ${this.getMonth()} ${new Date(
        new Date().toLocaleDateString()
      ).getUTCDate()}, ${new Date(
        new Date().toLocaleDateString()
      ).getUTCFullYear()}`;
    },

    /**
     * Returns the current month of the year
     * @returns {String} Current calendar month
     */
    getMonth() {
      const number = new Date().getUTCDay(new Date().toLocaleDateString());
      switch (number) {
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
     * Returns the current day of the week
     * @returns {String} Current day of the week
     */
    getDay() {
      const number = new Date().getUTCDay(new Date().toLocaleDateString());
      switch (number) {
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
    },

    /**
     * Returns a formatted HTML string from a begin time and end time
     * @param {number} beginTime Milliseconds from date.getTime()
     * @param {number} endTime Milliseconds from date.getTime()
     * @return {string} Formatted HTML time (1H 39M or 34M 22S)
     */
    getWorkoutTime(beginTime, endTime) {
      // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
      const milsecsPerDay = 24 * 60 * 60 * 1000;
      const milsecsPerHour = 60 * 60 * 1000;
      const timeDiff = endTime - beginTime;

      const hours = Math.floor(
        ((timeDiff % milsecsPerDay) / milsecsPerHour) * 1
      );
      const minutes = Math.floor(
        (((timeDiff % milsecsPerDay) % milsecsPerHour) / (60 * 1000)) * 1
      );
      const seconds = Math.floor(
        ((((timeDiff % milsecsPerDay) % milsecsPerHour) % (60 * 1000)) / 1000) *
          1
      );

      const _ = "&nbsp;";
      const H = `<span class="overline">H</span>`;
      const M = `<span class="overline">M</span>`;
      const S = `<span class="overline">S</span>`;

      const strHours = `${_}<span>${hours}</span>`;
      const strMins = `${_}<span>${minutes}</span>`;
      const strSecs = `${_}<span>${seconds}</span>`;

      if (hours > 0) {
        // Return hours and minutes (if not 0)
        let html = strHours + H;

        if (minutes > 0) {
          html += strMins + M;
        }

        return html;
      }

      if (minutes > 0) {
        // Return minutes and seconds (if not 0)
        let html = strMins + M;

        if (seconds > 0) {
          html += strSecs + S;
        }

        return html;
      }

      // Return only seconds if nothing else
      return strSecs + S;
    }
  },
  //############################################################################
  computed: {
    workoutTimer(time) {
      return time;
    }
  }
};
