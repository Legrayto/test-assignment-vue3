import { ref } from "@nuxtjs/composition-api"

import { CategoryShowcase, ShowcaseList } from "@/interfaces/showcase.interface"
import { fetchShowcasesData } from "@/mocks/showcase.mock"

export const useShowcase = () => {
    const showcaseList = ref<ShowcaseList>([])

    const fetchShowcaseList = async (category: CategoryShowcase) => {
        showcaseList.value = await fetchShowcasesData(category)
    }

    return {
        showcaseList,
        fetchShowcaseList
    }
}