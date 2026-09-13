import type { TrapperSet } from "./trapperSets"

export const trapperSaddleGroups: TrapperSet[] = [
  {
    id: "saddles",
    name: "Saddles",
    items: [
      { name: "Rattlesnake Vaquero Saddle", requirements: [{ pelt: "Perfect Snake Skin", count: 10 }] },
      { name: "Cougar McClelland Saddle", requirements: [{ pelt: "Perfect Cougar Pelt", count: 1 }] },
      { name: "Boar Mother Hubbard Saddle", requirements: [{ pelt: "Perfect Boar Pelt", count: 1 }] },
      { name: "Alligator Ranch Cutter Saddle", requirements: [{ pelt: "Perfect Alligator Skin", count: 1 }] },
      { name: "Bear Dakota Saddle", requirements: [{ pelt: "Perfect Bear Pelt", count: 1 }] },
      { name: "Beaver Roping Saddle", requirements: [{ pelt: "Perfect Beaver Pelt", count: 1 }] },
      { name: "Panther Trail Saddle", requirements: [{ pelt: "Perfect Panther Pelt", count: 1 }] },
    ],
  },
]
