export type ShowcaseListItem = {
    id: number
    image: string
    description: string
    category: string
}

export type ShowcaseList = ShowcaseListItem[];

export type CategoryShowcase = 'hotel' | 'credit' | 'credit-card' | 'all'
 