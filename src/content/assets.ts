import type { PlaceholderAsset } from "@/types";

export const placeholderAssets: PlaceholderAsset[] = [
  {
    id: "TODO-ASSET-001",
    current: "/images/source/06_Jordan_Photo_3.jpg",
    futureTarget: "/images/hero-image.jpg",
    alt: "Jordan Delks hero image"
  },
  {
    id: "TODO-ASSET-002",
    current: "/images/source/03_Product_Images.jpeg",
    futureTarget: "/images/products/daily-journal.jpg",
    alt: "Compete daily journal product image"
  },
  {
    id: "TODO-ASSET-003",
    current: "/images/source/03_Product_Images.jpeg",
    futureTarget: "/images/products/winners-manual.jpg",
    alt: "Compete winners manual product image"
  },
  {
    id: "TODO-ASSET-004",
    current: "/images/source/03_Product_Images.jpeg",
    futureTarget: "/images/products/dream-szn.jpg",
    alt: "Dream Szn strategic plan image"
  },
  {
    id: "TODO-ASSET-005",
    current: "/images/source/02_Get_Better_Book_Cover.jpg",
    futureTarget: "/images/products/get-better-book.jpg",
    alt: "Get Better book cover"
  },
  {
    id: "TODO-ASSET-006",
    current: "/images/source/compete-training-logo-final.png",
    futureTarget: "/images/og/og-default.jpg",
    alt: "Compete Training Academy logo"
  }
];

export const assetById = Object.fromEntries(
  placeholderAssets.map((asset) => [asset.id, asset])
);
