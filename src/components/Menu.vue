<script>
  export default {
    props:{
        title: String,
        link: String,
        items: Array
    },
    data: () => ({
     
    })
  }
</script>

<template>
    <v-menu :close-on-content-click="false">
        <template v-slot:activator="{ props }">
            <v-btn v-if="this.link != null" @click="$router.push({name: this.link})" class="text-none">{{title}}</v-btn>
            <v-btn v-else class="text-none" v-bind="props">{{title}}</v-btn>
        </template>

        <v-list v-show="items.length>0">
            <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :title="item.title"
                @click="$router.push(item.id ?
                {name: item.link, params: { id: item.id } } :
                {name: item.link})"
            >
            </v-list-item>           
        </v-list>
    </v-menu>
  </template>