<template>
    <v-app id="inspire">
        <v-app-bar
            app
            color="white"
            flat
            >
            <v-container class="py-0 fill-height">
                <v-avatar
                    class="mr-10"
                    color="grey darken-1"
                    size="32"
                ></v-avatar>

                <v-btn
                    v-for="link in links"
                    :key="link"
                    text
                    >
                    {{ link }}
                </v-btn>

                <v-spacer></v-spacer>

                <v-responsive max-width="260">
                <v-text-field
                    dense
                    flat
                    hide-details
                    rounded
                    solo-inverted
                ></v-text-field>
                </v-responsive>
            </v-container>
            </v-app-bar>

            <v-main class="grey lighten-3">
            <v-container>
                <v-row>
                    <v-col cols="3">
                        <v-sheet rounded="lg">
                        <v-list color="transparent">
                            <v-list-item
                                v-for="catalogItem in catalog"
                                :key="catalogItem.id"
                                link
                            >
                                <nuxt-link :to="catalogItem.link" class="main-page__link">
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            {{  catalogItem.value  }}
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </nuxt-link>
                            </v-list-item>

                            <v-divider class="my-2"></v-divider>

                            <v-list-item
                                link
                                color="grey lighten-4"
                            >
                            <v-list-item-content>
                                <v-list-item-title>
                                    Refresh
                                </v-list-item-title>
                            </v-list-item-content>
                            </v-list-item>
                        </v-list>
                        </v-sheet>
                    </v-col>

                    <v-col>
                        <v-sheet
                            min-height="70vh"
                            rounded="lg"
                            class="pa-5"
                        >
                            <slot />
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="ts">
    import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api'
    import { useCatalog } from '@/composables/catalog'

    export default defineComponent({
        setup: () => {
            const links = ref<string[]>( [
                'Главная',
            ])

            const {
                catalog,
                fetchCatalog
            } = useCatalog()

            onMounted(fetchCatalog)

            return {
                links,
                catalog
            }
        }
    })
</script>

<style>

    .main-page__link {
        width: 100%;
        text-decoration: none;
    }

</style>