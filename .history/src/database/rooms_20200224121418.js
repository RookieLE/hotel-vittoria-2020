import LakeView from "../images/hotel/bed-room-lake.png"
import GardenView from "../images/hotel/bed-room-garden.png"
import InsideView from "../images/hotel/bed-room-inside.png"

export const ROOMS = [
  {
    type: "Lake view",
    id: 31,
    for: 1,
    priceHighSeason: 90,
    priceLowSeason: 75,
    imageUrl: LakeView,
    breakfast: true,
  },
  {
    type: "Lake view",
    id: 29,
    for: 2,
    priceHighSeason: 90,
    priceLowSeason: 75,
    imageUrl: LakeView,
    breakfast: true,
  },
  {
    type: "Garden view",
    id: 1,
    for: 2,
    priceHighSeason: 55,
    priceLowSeason: 45,
    imageUrl: GardenView,
    breakfast: false,
  },
  {
    type: "Garden view",
    id: 3,
    for: 4,
    priceHighSeason: 80,
    priceLowSeason: 70,
    imageUrl: GardenView,
    breakfast: false,
  },
  {
    type: "Inside view",
    id: 10,
    for: 1,
    priceHighSeason: 70,
    priceLowSeason: 55,
    imageUrl: InsideView,
    breakfast: false,
  },
  {
    type: "Inside view",
    id: 12,
    for: 4,
    priceHighSeason: 100,
    priceLowSeason: 85,
    imageUrl: InsideView,
    breakfast: true,
  },
]
