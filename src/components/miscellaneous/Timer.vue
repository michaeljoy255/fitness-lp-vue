<template lang="pug">
  div.my-1
    v-icon timer
    span.vertical-middle
      span(v-show="hours > 0") &nbsp; {{ hours }}
      span(v-show="hours > 0").overline H
      span(v-show="minutes > 0") &nbsp; {{ minutes }}
      span(v-show="minutes > 0").overline M
      span(v-show="seconds > 0") &nbsp; {{ seconds }}
      span(v-show="seconds > 0").overline S
</template>

<script>
/**
 * Provide props endTime and beginTime if you want a static time display
 * Provide prop endTime only if you want a live timer
 */
export default {
  name: "Timer",
  props: {
    beginTime: {
      type: Number,
      default: new Date().getTime()
    },
    endTime: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
      milsecsPerDay: 24 * 60 * 60 * 1000,
      milsecsPerHour: 60 * 60 * 1000,
      timerId: null,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  },

  created() {
    if (this.endTime) {
      // end time given, so time is a static display
      this.getTime(this.beginTime, this.endTime);
    } else {
      // No end time given, so its a live timer
      this.timerId = setInterval(() => {
        this.getTime(this.beginTime, new Date().getTime());
      });
    }
  },

  destroyed() {
    clearInterval(this.timerId);
  },

  methods: {
    /**
     * Calculates the hours, minutes, and seconds from a begin time and end time
     * @param {number} beginTime Milliseconds from date.getTime()
     * @param {number} endTime Milliseconds from date.getTime()
     */
    getTime(beginTime, endTime) {
      const timeDiff = endTime - beginTime;

      this.hours = Math.floor(
        ((timeDiff % this.milsecsPerDay) / this.milsecsPerHour) * 1
      );
      this.minutes = Math.floor(
        (((timeDiff % this.milsecsPerDay) % this.milsecsPerHour) /
          (60 * 1000)) *
          1
      );
      this.seconds = Math.floor(
        ((((timeDiff % this.milsecsPerDay) % this.milsecsPerHour) %
          (60 * 1000)) /
          1000) *
          1
      );
    }
  }
};
</script>

<style lang="stylus" scoped>
.vertical-middle
  vertical-align middle
</style>
