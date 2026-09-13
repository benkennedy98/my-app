export interface ItemRequirement {
  pelt: string
  count: number
}

export interface TrapperItem {
  name: string
  requirements: ItemRequirement[]
}

export interface TrapperSet {
  id: string
  name: string
  items: TrapperItem[]
}

export const isLegendaryPelt = (pelt: string): boolean => pelt.startsWith("Legendary")

export const isFeather = (pelt: string): boolean => pelt.endsWith("Feather")

export const stripPeltQualityPrefix = (pelt: string): string =>
  pelt.replace(/^(Legendary|Perfect)\s+/, "")

export const trapperSets: TrapperSet[] = [
  {
    id: "bear-hunter",
    name: "The Bear Hunter",
    items: [
      { name: "Legendary Bear Head Hat", requirements: [{ pelt: "Legendary Bear Pelt", count: 1 }] },
      { name: "Legendary Bear Coat", requirements: [{ pelt: "Legendary Bear Pelt", count: 1 }, { pelt: "Perfect Bison Pelt", count: 1 }] },
      { name: "Legendary Bear Roper", requirements: [{ pelt: "Legendary Bear Pelt", count: 1 }, { pelt: "Perfect Bull Hide", count: 1 }] },
      { name: "Boar Riding Gloves", requirements: [{ pelt: "Perfect Boar Pelt", count: 1 }, { pelt: "Perfect Rabbit Pelt", count: 2 }] },
    ],
  },
  {
    id: "trophy-buck",
    name: "The Trophy Buck",
    items: [
      { name: "Raccoon Mountain Hat", requirements: [{ pelt: "Perfect Raccoon Pelt", count: 1 }, { pelt: "Perfect Beaver Pelt", count: 1 }, { pelt: "Hawk Feather", count: 2 }] },
      { name: "Legendary Buck Vest", requirements: [{ pelt: "Legendary Buck Pelt", count: 1 }, { pelt: "Perfect Ram Hide", count: 1 }] },
      { name: "Legendary Fox Moccasins", requirements: [{ pelt: "Perfect Elk Pelt", count: 1 }, { pelt: "Legendary Fox Pelt", count: 1 }] },
      { name: "Legendary Buck & Fox Range Gloves", requirements: [{ pelt: "Legendary Buck Pelt", count: 1 }, { pelt: "Legendary Fox Pelt", count: 1 }] },
    ],
  },
  {
    id: "dreamcatcher",
    name: "The Dreamcatcher",
    items: [
      { name: "Legendary Beaver Flop Hat", requirements: [{ pelt: "Legendary Beaver Pelt", count: 1 }, { pelt: "Legendary Boar Pelt", count: 1 }, { pelt: "Cardinal Feather", count: 1 }] },
      { name: "Legendary Bison Vest", requirements: [{ pelt: "Legendary Tatanka Bison Pelt", count: 1 }] },
      { name: "Legendary Bison Batwing Chaps", requirements: [{ pelt: "Legendary Tatanka Bison Pelt", count: 1 }] },
      { name: "Legendary Boar & Bison Fowlers", requirements: [{ pelt: "Legendary Boar Pelt", count: 1 }, { pelt: "Legendary Tatanka Bison Pelt", count: 1 }] },
      { name: "Legendary Boar & Bison Fowlers", requirements: [{ pelt: "Legendary Beaver Pelt", count: 1 }] },
    ],
  },
  {
    id: "beast-of-prey",
    name: "The Beast of Prey",
    items: [
      { name: "Legendary Cougar Flop Hat", requirements: [{ pelt: "Legendary Cougar Pelt", count: 1 }, { pelt: "Turkey Feather", count: 2 }] },
      { name: "Legendary Cougar & Wolf Vest", requirements: [{ pelt: "Legendary Cougar Pelt", count: 1 }, { pelt: "Legendary Wolf Pelt", count: 1 }] },
      { name: "Legendary Wolf Batwing Chaps", requirements: [{ pelt: "Legendary Wolf Pelt", count: 1 }, { pelt: "Perfect Goat Hide", count: 1 }] },
      { name: "Bull Fowler Boots", requirements: [{ pelt: "Perfect Boar Pelt", count: 1 }, { pelt: "Perfect Bull Hide", count: 1 }] },
      { name: "Legendary Cougar Riding Gloves", requirements: [{ pelt: "Legendary Cougar Pelt", count: 1 }, { pelt: "Perfect Boar Pelt", count: 1 }] },
    ],
  },
  {
    id: "huntsman",
    name: "The Huntsman",
    items: [
      { name: "Legendary Coyote Mountain Hat", requirements: [{ pelt: "Legendary Coyote Pelt", count: 1 }, { pelt: "Eagle Feather", count: 2 }] },
      { name: "Legendary Pronghorn Coat", requirements: [{ pelt: "Legendary Pronghorn Hide", count: 1 }, { pelt: "Perfect Moose Pelt", count: 1 }] },
      { name: "Legendary Coyote Half Chaps", requirements: [{ pelt: "Legendary Coyote Pelt", count: 1 }, { pelt: "Perfect Fox Pelt", count: 1 }] },
      { name: "Workman's Pride Boots", requirements: [{ pelt: "Perfect Cow Hide", count: 1 }, { pelt: "Perfect Goat Hide", count: 1 }] },
      { name: "Legendary Pronghorn Range Gloves", requirements: [{ pelt: "Legendary Pronghorn Hide", count: 1 }, { pelt: "Perfect Muskrat Pelt", count: 1 }] },
    ],
  },
  {
    id: "death-roll",
    name: "The Death Roll",
    items: [
      { name: "Legendary Alligator Gambler's Hat", requirements: [{ pelt: "Legendary Alligator Skin", count: 1 }, { pelt: "Perfect Snake Skin", count: 2 }] },
      { name: "Legendary Panther Cloak", requirements: [{ pelt: "Legendary Panther Pelt", count: 1 }] },
      { name: "Legendary Alligator Vest", requirements: [{ pelt: "Legendary Alligator Skin", count: 1 }] },
      { name: "Legendary Alligator Fowlers", requirements: [{ pelt: "Legendary Alligator Skin", count: 1 }] },
      { name: "Legendary Panther Range Gloves", requirements: [{ pelt: "Legendary Panther Pelt", count: 1 }, { pelt: "Perfect Gila Monster Skin", count: 1 }] },
    ],
  },
  {
    id: "stalker",
    name: "The Stalker",
    items: [
      { name: "Legendary Ram Hat", requirements: [{ pelt: "Legendary Ram Hide", count: 1 }] },
      { name: "Legendary Moose Hunting Jacket", requirements: [{ pelt: "Legendary Moose Pelt", count: 1 }, { pelt: "Perfect Wolf Pelt", count: 1 }] },
      { name: "Legendary Ram Batwing Chaps", requirements: [{ pelt: "Legendary Ram Hide", count: 1 }] },
      { name: "Legendary Moose Moccasins", requirements: [{ pelt: "Legendary Moose Pelt", count: 1 }, { pelt: "Perfect Cow Hide", count: 1 }] },
      { name: "Legendary Ram Rifleman Gloves", requirements: [{ pelt: "Legendary Ram Hide", count: 1 }, { pelt: "Perfect Boar Pelt", count: 1 }] },
    ],
  },
  {
    id: "ghost-bison",
    name: "The Ghost Bison",
    items: [
      { name: "Legendary White Bison Hat", requirements: [{ pelt: "Legendary White Bison Pelt", count: 1 }] },
      { name: "Legendary White Bison Coat", requirements: [{ pelt: "Legendary White Bison Pelt", count: 1 }] },
      { name: "Legendary Elk Half Chaps", requirements: [{ pelt: "Legendary Elk Pelt", count: 1 }, { pelt: "Perfect Sheep Hide", count: 1 }] },
      { name: "Legendary Elk Moccasins", requirements: [{ pelt: "Legendary Elk Pelt", count: 1 }, { pelt: "Perfect Goat Hide", count: 1 }] },
      { name: "Legendary Elk Range Gloves", requirements: [{ pelt: "Legendary Elk Pelt", count: 1 }] },
    ],
  },
  {
    id: "rattler",
    name: "The Rattler",
    items: [
      { name: "Ram Sombrero", requirements: [{ pelt: "Perfect Ram Hide", count: 1 }] },
      { name: "Outdoorsman Vest", requirements: [{ pelt: "Perfect Pronghorn Hide", count: 1 }] },
      { name: "Javelina Half Chaps", requirements: [{ pelt: "Perfect Collared Peccary Pig Pelt", count: 1 }, { pelt: "Perfect Snake Skin", count: 1 }] },
      { name: "Iguana Range Gloves", requirements: [{ pelt: "Perfect Collared Peccary Pig Pelt", count: 1 }, { pelt: "Perfect Iguana Skin", count: 2 }] },
    ],
  },
  {
    id: "wrangler",
    name: "The Wrangler",
    items: [
      { name: "Goat Flop Hat", requirements: [{ pelt: "Perfect Pronghorn Hide", count: 1 }, { pelt: "Goat Hide", count: 1 }] },
      { name: "Trapper's Coat", requirements: [{ pelt: "Perfect Sheep Hide", count: 1 }] },
      { name: "No-Man's Vest", requirements: [{ pelt: "Perfect Panther Pelt", count: 1 }, { pelt: "Perfect Goat Hide", count: 1 }] },
      { name: "Two Toned Moccasins", requirements: [{ pelt: "Perfect Buck Pelt", count: 1 }] },
      { name: "Moose Range Gloves", requirements: [{ pelt: "Perfect Moose Pelt", count: 1 }] },
    ],
  },
  {
    id: "bronco-buster",
    name: "The Bronco Buster",
    items: [
      { name: "Elk Flop Hat", requirements: [{ pelt: "Perfect Elk Pelt", count: 1 }] },
      { name: "Coyote Scout Jacket", requirements: [{ pelt: "Perfect Ox Hide", count: 1 }, { pelt: "Perfect Coyote Pelt", count: 1 }] },
      { name: "Huntsman Vest", requirements: [{ pelt: "Perfect Sheep Hide", count: 1 }, { pelt: "Perfect Deer Pelt", count: 1 }] },
      { name: "Boar Fringed Shotgun Chaps", requirements: [{ pelt: "Perfect Boar Pelt", count: 2 }] },
      { name: "Pigskin Rifleman Gloves", requirements: [{ pelt: "Perfect Pig Hide", count: 1 }] },
    ],
  },
  {
    id: "marauder",
    name: "The Marauder",
    items: [
      { name: "Muskrat Cavalry Hat", requirements: [{ pelt: "Perfect Rabbit Pelt", count: 4 }, { pelt: "Perfect Muskrat Pelt", count: 1 }] },
      { name: "Principal Vest", requirements: [{ pelt: "Perfect Cow Hide", count: 1 }, { pelt: "Perfect Deer Pelt", count: 1 }] },
      { name: "Bull Fringed Shotgun Chaps", requirements: [{ pelt: "Perfect Bull Hide", count: 1 }] },
      { name: "Snake Skin Cavalry Gloves", requirements: [{ pelt: "Perfect Boar Pelt", count: 1 }, { pelt: "Perfect Snake Skin", count: 1 }] },
    ],
  },
  {
    id: "bounty-hunter",
    name: "The Bounty Hunter",
    items: [
      { name: "Plantation Slouch Hat", requirements: [{ pelt: "Perfect Bison Pelt", count: 1 }] },
      { name: "Beaver Hunting Jacket", requirements: [{ pelt: "Perfect Cow Hide", count: 1 }, { pelt: "Perfect Beaver Hide", count: 2 }] },
      { name: "Sheepskin Vest", requirements: [{ pelt: "Perfect Sheep Hide", count: 2 }] },
      { name: "Pronghorn Half Chaps", requirements: [{ pelt: "Perfect Pronghorn Hide", count: 1 }] },
      { name: "Buck Riding Gloves", requirements: [{ pelt: "Perfect Buck Pelt", count: 1 }] },
    ],
  },
  {
    id: "desperado",
    name: "The Desperado",
    items: [
      { name: "Beaver Drifter Hat", requirements: [{ pelt: "Perfect Beaver Pelt", count: 2 }] },
      { name: "Wolf Coat", requirements: [{ pelt: "Perfect Ram Hide", count: 1 }, { pelt: "Perfect Wolf Pelt", count: 1 }] },
      { name: "Billy Vest", requirements: [{ pelt: "Perfect Armadillo Skin", count: 2 }, { pelt: "Perfect Goat Hide", count: 1 }] },
      { name: "Boar & Bull Fowler Boots", requirements: [{ pelt: "Perfect Ox Hide", count: 1 }, { pelt: "Perfect Boar Pelt", count: 1 }] },
      { name: "Winter Cavalry Gloves", requirements: [{ pelt: "Perfect Rabbit Pelt", count: 1 }, { pelt: "Perfect Muskrat Pelt", count: 2 }] },
    ],
  },
  {
    id: "night-wrangler",
    name: "The Night Wrangler",
    items: [
      { name: "Coyote Gambler's Hat", requirements: [{ pelt: "Perfect Coyote Pelt", count: 2 }] },
      { name: "Cougar Cutaway Coat", requirements: [{ pelt: "Perfect Cougar Pelt", count: 2 }, { pelt: "Perfect Black Bear Pelt", count: 1 }] },
      { name: "Wilderness Vest", requirements: [{ pelt: "Perfect Wolf Pelt", count: 1 }, { pelt: "Perfect Panther Pelt", count: 1 }] },
      { name: "Moose Half Chaps", requirements: [{ pelt: "Perfect Moose Pelt", count: 1 }] },
      { name: "Badger Rifleman Gloves", requirements: [{ pelt: "Perfect Badger Pelt", count: 1 }] },
    ],
  },
  {
    id: "mountain-man",
    name: "The Mountain Man",
    items: [
      { name: "Grenadier Hat", requirements: [{ pelt: "Perfect Muskrat Pelt", count: 1 }, { pelt: "Perfect Beaver Pelt", count: 1 }] },
      { name: "Ram Shotgun Coat", requirements: [{ pelt: "Perfect Ram Hide", count: 2 }] },
      { name: "Country Vest", requirements: [{ pelt: "Perfect Buck Pelt", count: 1 }, { pelt: "Perfect Beaver Pelt", count: 1 }] },
      { name: "Elk Riding Gloves", requirements: [{ pelt: "Perfect Elk Pelt", count: 1 }] },
    ],
  },
]
