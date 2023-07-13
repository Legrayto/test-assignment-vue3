import { ref } from "@nuxtjs/composition-api"

import { CatalogItems } from "@/interfaces/catalog.interface"
import { fetchCatalogMock } from "@/mocks/catalog.mock"

export const useCatalog = () => {
    const catalog = ref<CatalogItems>([])

    const fetchCatalog = async () => {
        catalog.value = await fetchCatalogMock()
    }

    return {
        catalog,
        fetchCatalog
    }
}