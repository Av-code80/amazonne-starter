import { z } from 'zod'
import {
  CartSchema,
  OrderItemSchema,
  ProductInputSchema,
} from '@/lib/validator'

export type IProductInput = z.infer<typeof ProductInputSchema>
export type OrderItem = z.infer<typeof OrderItemSchema>
export type Cart = z.infer<typeof CartSchema>

export type Data = {
  products: IProductInput[]
  headerMenus: {
    name: string
    href: string
  }[]
  carousels: {
    image: string
    url: string
    title: string
    buttonCaption: string
    isPublished: boolean
  }[]
}
