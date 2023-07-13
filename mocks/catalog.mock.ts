import { CatalogItems } from "@/interfaces/catalog.interface"

export const catalogData: CatalogItems = [
    {
        id: 1,
        value: 'Отели',
        link: '/?category=hotel'
    },
    {
        id: 2,
        value: 'Займы',
        link: '/?category=credit'
    },
    {
        id: 3,
        value: 'Кредитные карты',
        link: '/?category=credit-card'
    },
]

export const fetchCatalogMock = async (): Promise<CatalogItems> => Promise.resolve(catalogData)