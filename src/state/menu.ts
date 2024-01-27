import { observable } from '@legendapp/state'

export const pageTypes = ['home', 'about', 'work', 'contact'] as const
export interface MenuState {
  selectedPage: (typeof pageTypes)[number]
}

export const $menuState = observable<MenuState>({
  selectedPage: 'home',
})
