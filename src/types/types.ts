import { ItemCategories } from "./enums";

export type MinecraftItem = {
  id: number;
  name: string;
  displayName: string;
  stackSize: number;
  category: ItemCategories;
};

export type SelectedMinecraftItem = {
  mcItem: MinecraftItem;
  amount: number | null;
  amountInStacks: number;
  amountInDoubleChests: number;
  amountInShulkers: number;
};