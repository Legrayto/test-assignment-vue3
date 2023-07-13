<template>
  <v-card
    class="mx-auto"
    max-width="250"
  >
    <v-img
      :src="showcase.image"
      height="100px"
    ></v-img>

    <v-card-subtitle>
      {{ showcase.description  }}
    </v-card-subtitle>

    <v-chip>
      {{ showcase.category }}
    </v-chip>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Подробнее
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
    import { PropType, defineComponent } from '@nuxtjs/composition-api'

    import { ShowcaseListItem } from '@/interfaces/showcase.interface'

    export default defineComponent({
        props: {
            showcase: {
                type: Object as PropType<ShowcaseListItem>,
                    required: true
            }
        }
    })
</script>

<style lang="scss" scoped>

</style>
