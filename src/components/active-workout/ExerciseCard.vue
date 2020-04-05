<template lang="pug">
  v-card
    v-card-title Exercise Card
    v-card-subtitle Need to fill this with exercise data...
    v-card-text {{ testText }}
</template>

<script>
export default {
  name: "ExerciseCard",
  data() {
    return {
      testText: `This is test text that is only here to see how it would look in
                the component content. Does it look okay? I hope it does. I'm
                going to repeat this a few times just to be safe. This is test
                text that is only here to see how it would look in the component
                content. Does it look okay? I hope it does. I'm going to repeat
                this a few times just to be safe. This is test text that is only
                here to see how it would look in the component content. Does it
                look okay? I hope it does. I'm going to repeat this a few times
                just to be safe. This is test text that is only here to see how
                it would look in the component content. Does it look okay? I
                hope it does. I'm going to repeat this a few times just to be
                safe.`
    };
  }
};
</script>

<style></style>
