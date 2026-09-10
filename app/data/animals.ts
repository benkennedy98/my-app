export interface Animal {
  name: string
  weapons: string[]
}

export const animals: Animal[] = [
  // Small Game Arrows
  { name: "Bat", weapons: ["Small Game Arrows"] },
  { name: "Blue Jay", weapons: ["Small Game Arrows"] },
  { name: "Booby", weapons: ["Small Game Arrows"] },
  { name: "Bullfrog", weapons: ["Small Game Arrows"] },
  { name: "Cardinal", weapons: ["Small Game Arrows"] },
  { name: "Cedar Waxwing", weapons: ["Small Game Arrows"] },
  { name: "Chicken (Dominique, Java, Leghorn, Greater Prairie)", weapons: ["Small Game Arrows"] },
  { name: "Chipmunk", weapons: ["Small Game Arrows"] },
  { name: "Crab", weapons: ["Small Game Arrows"] },
  { name: "Duck (Pekin & Mallard)", weapons: ["Small Game Arrows"] },
  { name: "Gull (Herring, Laughing, Ring-billed)", weapons: ["Small Game Arrows"] },
  { name: "Loon (Common, Pacific, Yellow-billed)", weapons: ["Small Game Arrows"] },
  { name: "Oriole (Baltimore & Hooded)", weapons: ["Small Game Arrows"] },
  { name: "Parakeet", weapons: ["Small Game Arrows"] },
  { name: "Parrot (Macaw)", weapons: ["Small Game Arrows"] },
  { name: "Pheasant", weapons: ["Small Game Arrows"] },
  { name: "Pigeon", weapons: ["Small Game Arrows"] },
  { name: "Quail", weapons: ["Small Game Arrows"] },
  { name: "Rat", weapons: ["Small Game Arrows"] },
  { name: "Raven", weapons: ["Small Game Arrows"] },
  { name: "Robin", weapons: ["Small Game Arrows"] },
  { name: "Rooster", weapons: ["Small Game Arrows"] },
  { name: "Snake / Boa", weapons: ["Small Game Arrows"] },
  { name: "Songbird", weapons: ["Small Game Arrows"] },
  { name: "Sparrow", weapons: ["Small Game Arrows"] },
  { name: "Squirrel", weapons: ["Small Game Arrows"] },
  { name: "Toad", weapons: ["Small Game Arrows"] },
  { name: "Woodpecker", weapons: ["Small Game Arrows"] },

  // Varmint Rifle
  { name: "Armadillo", weapons: ["Varmint Rifle"] },
  { name: "Badger", weapons: ["Varmint Rifle"] },
  { name: "Beaver", weapons: ["Varmint Rifle"] },
  { name: "Condor", weapons: ["Varmint Rifle"] },
  { name: "Cormorant (Double-Crested & Neotropic)", weapons: ["Varmint Rifle"] },
  { name: "Crane (Sandhill & Whooping)", weapons: ["Varmint Rifle"] },
  { name: "Crow", weapons: ["Varmint Rifle"] },
  { name: "Eagle (Bald & Golden)", weapons: ["Varmint Rifle"] },
  { name: "Egret (Reddish, Little, Snowy)", weapons: ["Varmint Rifle"] },
  { name: "Gila Monster", weapons: ["Varmint Rifle"] },
  { name: "Goose", weapons: ["Varmint Rifle"] },
  { name: "Hawk (Ferruginous, Red-tailed, Rough-legged)", weapons: ["Varmint Rifle"] },
  { name: "Heron (Great Blue & Tricolored)", weapons: ["Varmint Rifle"] },
  { name: "Iguana (Green & Desert)", weapons: ["Varmint Rifle"] },
  { name: "Muskrat", weapons: ["Varmint Rifle"] },
  { name: "Opossum", weapons: ["Varmint Rifle"] },
  { name: "Owl (California Horned, Coastal Horned, Great Horned)", weapons: ["Varmint Rifle"] },
  { name: "Pelican", weapons: ["Varmint Rifle"] },
  { name: "Rabbit", weapons: ["Varmint Rifle"] },
  { name: "Raccoon", weapons: ["Varmint Rifle"] },
  { name: "Skunk", weapons: ["Varmint Rifle"] },
  { name: "Spoonbill", weapons: ["Varmint Rifle"] },
  { name: "Turkey", weapons: ["Varmint Rifle"] },
  { name: "Vulture", weapons: ["Varmint Rifle"] },

  // Medium Animals
  { name: "Alligator (small)", weapons: ["Rifle (Regular)", "Poisoned Arrows", "Knives"] },
  { name: "Boar", weapons: ["Rifle (Regular)", "Poisoned Arrows", "Knives"] },
  { name: "Buck", weapons: ["Rifle (Regular)", "Poisoned Arrows", "Knives"] },
  { name: "Coyote", weapons: ["Rifle (Regular)", "Poisoned Arrows", "Knives"] },
  { name: "Cougar", weapons: ["Rifle (Regular)", "Poisoned Arrows", "Knives"] },
  { name: "Deer", weapons: ["Rifle (Regular)", "Poisoned Arrows", "Knives"] },
  { name: "Fox (Red, Gray, Silver)", weapons: ["Rifle (Regular)", "Poisoned Arrows", "Knives"] },
  { name: "Goat", weapons: ["Rifle (Regular)", "Poisoned Arrows", "Knives"] },
  { name: "Lion", weapons: ["Rifle (Regular)", "Poisoned Arrows", "Knives"] },
  { name: "Panther", weapons: ["Rifle (Regular)", "Poisoned Arrows", "Knives"] },
  { name: "Collared Peccary Pig", weapons: ["Rifle (Regular)", "Poisoned Arrows", "Knives"] },
  { name: "Pig", weapons: ["Rifle (Regular)", "Poisoned Arrows", "Knives"] },
  { name: "Pronghorn", weapons: ["Rifle (Regular)", "Poisoned Arrows", "Knives"] },
  { name: "Ram", weapons: ["Rifle (Regular)", "Poisoned Arrows", "Knives"] },
  { name: "Sheep", weapons: ["Rifle (Regular)", "Poisoned Arrows", "Knives"] },
  { name: "Turtle", weapons: ["Rifle (Regular)", "Poisoned Arrows", "Knives"] },
  { name: "Wolf", weapons: ["Rifle (Regular)", "Poisoned Arrows", "Knives"] },

  // Large Animals
  { name: "Alligator", weapons: ["Rifle (Regular/Express)", "Improved Arrows", "Poisoned Arrows", "Knives"] },
  { name: "Bear (Black & Grizzly)", weapons: ["Rifle (Regular/Express)", "Improved Arrows", "Poisoned Arrows", "Knives"] },
  { name: "Bison", weapons: ["Rifle (Regular/Express)", "Improved Arrows", "Poisoned Arrows", "Knives"] },
  { name: "Bull", weapons: ["Rifle (Regular/Express)", "Improved Arrows", "Poisoned Arrows", "Knives"] },
  { name: "Elk", weapons: ["Rifle (Regular/Express)", "Improved Arrows", "Poisoned Arrows", "Knives"] },
  { name: "Moose", weapons: ["Rifle (Regular/Express)", "Improved Arrows", "Poisoned Arrows", "Knives"] },
  { name: "Ox", weapons: ["Rifle (Regular/Express)", "Improved Arrows", "Poisoned Arrows", "Knives"] },
  { name: "Cow", weapons: ["Rifle (Regular/Express)", "Improved Arrows", "Poisoned Arrows", "Knives"] },

  // Medium/Large Animals (Lasso)
  { name: "Bison (Lasso)", weapons: ["Lasso"] },
  { name: "Boar (Lasso)", weapons: ["Lasso"] },
  { name: "Buck (Lasso)", weapons: ["Lasso"] },
  { name: "Bull (Lasso)", weapons: ["Lasso"] },
  { name: "Cow (Lasso)", weapons: ["Lasso"] },
  { name: "Deer (Lasso)", weapons: ["Lasso"] },
  { name: "Goat (Lasso)", weapons: ["Lasso"] },
  { name: "Moose (Lasso)", weapons: ["Lasso"] },
  { name: "Ox (Lasso)", weapons: ["Lasso"] },
  { name: "Collared Peccary Pig (Lasso)", weapons: ["Lasso"] },
  { name: "Pig (Lasso)", weapons: ["Lasso"] },
  { name: "Pronghorn (Lasso)", weapons: ["Lasso"] },
  { name: "Ram (Lasso)", weapons: ["Lasso"] },
  { name: "Sheep (Lasso)", weapons: ["Lasso"] },
]

export const getAllAnimalNames = (): string[] => {
  return animals.map(a => a.name).sort()
}

export const getAnimalByName = (name: string): Animal | undefined => {
  return animals.find(a => a.name.toLowerCase() === name.toLowerCase())
}
