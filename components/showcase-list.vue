<template>
    <div class="showcase-list">
        <showcase-card
            v-for="showcase in showcaseList"
            :key="showcase.id"
            :showcase="showcase"
        />
    </div>
</template>

<script lang="ts">
    import { PropType, defineComponent, onMounted, watch } from '@nuxtjs/composition-api'

    import ShowcaseCard from '@/components/showcase-card.vue'

    import { CategoryShowcase } from '@/interfaces/showcase.interface';
    import { useShowcase } from '@/composables/showcase'

    export default defineComponent({
        components: {
            ShowcaseCard
        },
        props: {
            category: {
                type: String as PropType<CategoryShowcase>,
                required: true
            }
        },
        setup: (props) => {
            const { showcaseList, fetchShowcaseList} = useShowcase()

            watch(
                () => props.category,
                () => fetchShowcaseList(props.category) 
            )

            onMounted(() => fetchShowcaseList(props.category))

            return {
                showcaseList
            }
        } 
    })
</script>

<style scoped>
    .showcase-list {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        margin: 20px 0;
    }
</style>
