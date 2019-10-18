export interface IRestaurant {
  name: string,
  location: string,
  menu: Menu
}

export type Menu = {
  ramen: RamenItems[]
}

export type RamenItems = {
  name: string,
  options?: string[],
  sizes?: string[],
  [key: string]: string[] | string | undefined
}
