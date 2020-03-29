<template lang="pug">
  v-container(fluid)
    v-card(shaped)
      v-card-title Records
      v-card-subtitle Create, Read, Update, and Delete operations to be implemented...
      v-card-text This area can contain all the reacords for this item (Read).
      
      v-btn.ml-3.mb-3(color="success" rounded)
        span Create
        v-icon(right) add

      v-btn.ml-3.mb-3(color="warning" rounded)
        span Update
        v-icon(right) create

      v-btn.ml-3.mb-3(color="error" rounded)
        span Delete
        v-icon(right) delete_forever

      v-btn.ml-3.mb-3(color="error" rounded)
        span Clear All Records
        v-icon(right) delete_sweep

</template>

<script>
export default {
  name: "Records"
};
</script>

<style></style>
