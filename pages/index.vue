<template>
    <div class="main-page">
      <main-layout>
        <h3>Все предложения</h3>

        <showcase-list :category="category" />

        <v-pagination :length="6"></v-pagination>
      </main-layout>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref, useContext, watch } from '@nuxtjs/composition-api'

    import MainLayout from '@/layouts/main.vue'
    import ShowcaseList from '@/components/showcase-list.vue'

    import { CategoryShowcase } from '@/interfaces/showcase.interface'

    export default defineComponent({
      components: {
        MainLayout,
        ShowcaseList
      },

      setup: () => {
        const { route } = useContext()
        const category = ref<CategoryShowcase>('all')

        watch(
          () => route.value.query.category,
          () => {
            if (!route.value.query.category) return

            category.value = route.value.query.category as CategoryShowcase
          },
          { immediate: true }
        )

        return {
          category,
        }
      }
    })
</script>
