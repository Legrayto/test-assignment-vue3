import { CategoryShowcase, ShowcaseList } from "@/interfaces/showcase.interface";

export const showcases: ShowcaseList = [
    {
        id: 1,
        image: '/images/credit.jpg',
        description: 'Займы с компьютера или мобильного устройства - круглосуточно.',
        category: 'credit'
    },
    {
        id: 2,
        image: '/images/credit.jpg',
        description: 'Займы с компьютера или мобильного устройства - круглосуточно.',
        category: 'credit'
    },
    {
        id: 3,
        image: '/images/credit.jpg',
        description: 'Займы с компьютера или мобильного устройства - круглосуточно.',
        category: 'credit'
    },
    {
        id: 4,
        image: '/images/credit.jpg',
        description: 'Займы с компьютера или мобильного устройства - круглосуточно.',
        category: 'credit'
    },
    {
        id: 5,
        image: '/images/credit.jpg',
        description: 'Займы с компьютера или мобильного устройства - круглосуточно.',
        category: 'credit'
    },
    {
        id: 6,
        image: '/images/credit.jpg',
        description: 'Займы с компьютера или мобильного устройства - круглосуточно.',
        category: 'credit'
    },
    {
        id: 7,
        image: '/images/credit.jpg',
        description: 'Займы с компьютера или мобильного устройства - круглосуточно.',
        category: 'credit'
    },
    {
        id: 8,
        image: '/images/credit.jpg',
        description: 'Займы с компьютера или мобильного устройства - круглосуточно.',
        category: 'credit'
    },
    {
        id: 9,
        image: '/images/hotel.png',
        description: 'Крупнейший российский сервис краткосрочной аренды недвижимости.',
        category: 'hotel'
    },
    {
        id: 10,
        image: '/images/hotel.png',
        description: 'Крупнейший российский сервис краткосрочной аренды недвижимости.',
        category: 'hotel'
    },
    {
        id: 11,
        image: '/images/hotel.png',
        description: 'Крупнейший российский сервис краткосрочной аренды недвижимости.',
        category: 'hotel'
    },
    {
        id: 12,
        image: '/images/hotel.png',
        description: 'Крупнейший российский сервис краткосрочной аренды недвижимости.',
        category: 'hotel'
    },
    {
        id: 13,
        image: '/images/hotel.png',
        description: 'Крупнейший российский сервис краткосрочной аренды недвижимости.',
        category: 'hotel'
    },
    {
        id: 14,
        image: '/images/hotel.png',
        description: 'Крупнейший российский сервис краткосрочной аренды недвижимости.',
        category: 'hotel'
    },
    {
        id: 15,
        image: '/images/hotel.png',
        description: 'Крупнейший российский сервис краткосрочной аренды недвижимости.',
        category: 'hotel'
    },
    {
        id: 16,
        image: '/images/hotel.png',
        description: 'Крупнейший российский сервис краткосрочной аренды недвижимости.',
        category: 'hotel'
    },
    {
        id: 17,
        image: '/images/credit-card.jpg',
        description: 'Кредитная карта «180 дней» - простые и прозрачные условия, возможность пользоваться беспроцентным периодом в срок до 180 дней.',
        category: 'credit-card'
    },
    {
        id: 18,
        image: '/images/credit-card.jpg',
        description: 'Кредитная карта «180 дней» - простые и прозрачные условия, возможность пользоваться беспроцентным периодом в срок до 180 дней.',
        category: 'credit-card'
    },
    {
        id: 19,
        image: '/images/credit-card.jpg',
        description: 'Кредитная карта «180 дней» - простые и прозрачные условия, возможность пользоваться беспроцентным периодом в срок до 180 дней.',
        category: 'credit-card'
    },
]

export const fetchShowcasesData = async (category: CategoryShowcase): Promise<ShowcaseList> => {
    if (category === 'all') return Promise.resolve(showcases)

    const showcaseResult = showcases.filter(showcase => showcase.category === category)

    return Promise.resolve(showcaseResult)
}