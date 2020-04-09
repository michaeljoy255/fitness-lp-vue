<template lang="pug">
  v-footer(app color="primary")
      v-spacer
      Timer(:beginTime="beginTime")
      v-spacer
</template>

<script>
import Timer from "../miscellaneous/Timer";

export default {
  name: "WorkoutFooter",
  components: {
    Timer
  },
  props: {
    beginTime: {
      type: Number,
      default: new Date().getTime()
    }
  }
};
</script>
