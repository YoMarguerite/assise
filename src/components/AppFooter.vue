<template>
  <v-footer height="40" app>
    <v-row class="mb-10 border-t-lg">
      <v-col cols="12">
        <v-img
            height="120"
            :src="sourceImage"
          ></v-img>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  import imgUrl from '../assets/En tête L\'Assise.jpg'
  
  export default {
    data: () => ({
      sourceImage:imgUrl,
    })
  }
</script>

<style scoped lang="sass">
</style>
