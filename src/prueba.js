const positions = [
  { id: 1, name: "BTN", gameTypeId: 1, zisesIds: [1, 2, 3, 4, 5] },
  {
    id: 2,
    name: "SB VS BB",
    gameTypeId: 1,
    zisesIds: [6, 7, 8, 9, 10],
  },
  {
    id: 3,
    name: "SB VS BTN LIMP",
    gameTypeId: 1,
    zisesIds: [11, 12, 13, 14, 15],
  },
  {
    id: 4,
    name: "SB VS BTN RAISE",
    gameTypeId: 1,
    zisesIds: [16, 17, 18, 19, 20],
  },
  {
    id: 5,
    name: "BB VS SB LIMP",
    gameTypeId: 1,
    zisesIds: [21, 22, 23, 24, 25],
  },
  {
    id: 6,
    name: "BB VS SB RAISE",
    gameTypeId: 1,
    zisesIds: [26, 27, 28, 29, 30],
  },
  {
    id: 7,
    name: "BB VS BTN LIMP",
    gameTypeId: 1,
    zisesIds: [31, 32, 33, 34, 35],
  },
  {
    id: 8,
    name: "BB VS BTN RAISE",
    gameTypeId: 1,
    zisesIds: [36, 37, 38, 39, 40],
  },
  {
    id: 9,
    name: "BB VS BTN + SB",
    gameTypeId: 1,
    zisesIds: [41, 42, 43, 44, 45],
  },
  {
    id: 10,
    name: "SB VS BB",
    gameTypeId: 2,
    zisesIds: [46, 47, 48, 49, 50],
  },
  {
    id: 11,
    name: "BB VS SB LIMP",
    gameTypeId: 2,
    zisesIds: [51, 52, 53, 54, 55],
  },
  {
    id: 12,
    name: "BB VS SB RAISE",
    gameTypeId: 2,
    zisesIds: [56, 57, 58, 59, 60],
  },
];
const sizes = [
  {
    id: 1,
    range: "[ 22 , ∞ >",
    positionId: 1,
  },
  {
    id: 2,
    range: "[ 17 , 22 >",
    positionId: 1,
  },
  {
    id: 3,
    range: "[ 13 , 27 >",
    positionId: 1,
  },
  {
    id: 4,
    range: "[  9 , 13 >",
    positionId: 1,
  },
  {
    id: 5,
    range: "[  6 ,  9 >",
    positionId: 1,
  },
  {
    id: 6,
    range: "[ 22 , ∞ >",
    positionId: 2,
  },
  {
    id: 7,
    range: "[ 17 , 22 >",
    positionId: 2,
  },
  {
    id: 8,
    range: "[ 13 , 27 >",
    positionId: 2,
  },
  {
    id: 9,
    range: "[  9 , 13 >",
    positionId: 2,
  },
  {
    id: 10,
    range: "[  6 ,  9 >",
    positionId: 2,
  },
  {
    id: 11,
    range: "[ 22 , ∞ >",
    positionId: 3,
  },
  {
    id: 12,
    range: "[ 17 , 22 >",
    positionId: 3,
  },
  {
    id: 13,
    range: "[ 13 , 27 >",
    positionId: 3,
  },
  {
    id: 14,
    range: "[  9 , 13 >",
    positionId: 3,
  },
  {
    id: 15,
    range: "[  6 ,  9 >",
    positionId: 3,
  },
  {
    id: 16,
    range: "[ 22 , ∞ >",
    positionId: 4,
  },
  {
    id: 17,
    range: "[ 17 , 22 >",
    positionId: 4,
  },
  {
    id: 18,
    range: "[ 13 , 27 >",
    positionId: 4,
  },
  {
    id: 19,
    range: "[  9 , 13 >",
    positionId: 4,
  },
  {
    id: 20,
    range: "[  6 ,  9 >",
    positionId: 4,
  },
  {
    id: 21,
    range: "[ 22 , ∞ >",
    positionId: 5,
  },
  {
    id: 22,
    range: "[ 17 , 22 >",
    positionId: 5,
  },
  {
    id: 23,
    range: "[ 13 , 27 >",
    positionId: 5,
  },
  {
    id: 24,
    range: "[  9 , 13 >",
    positionId: 5,
  },
  {
    id: 25,
    range: "[  6 ,  9 >",
    positionId: 5,
  },
  {
    id: 26,
    range: "[ 22 , ∞ >",
    positionId: 6,
  },
  {
    id: 27,
    range: "[ 17 , 22 >",
    positionId: 6,
  },
  {
    id: 28,
    range: "[ 13 , 27 >",
    positionId: 6,
  },
  {
    id: 29,
    range: "[  9 , 13 >",
    positionId: 6,
  },
  {
    id: 30,
    range: "[  6 ,  9 >",
    positionId: 6,
  },
  {
    id: 31,
    range: "[ 22 , ∞ >",
    positionId: 7,
  },
  {
    id: 32,
    range: "[ 17 , 22 >",
    positionId: 7,
  },
  {
    id: 33,
    range: "[ 13 , 27 >",
    positionId: 7,
  },
  {
    id: 34,
    range: "[  9 , 13 >",
    positionId: 7,
  },
  {
    id: 35,
    range: "[  6 ,  9 >",
    positionId: 7,
  },
  {
    id: 36,
    range: "[ 22 , ∞ >",
    positionId: 8,
  },
  {
    id: 37,
    range: "[ 17 , 22 >",
    positionId: 8,
  },
  {
    id: 38,
    range: "[ 13 , 27 >",
    positionId: 8,
  },
  {
    id: 39,
    range: "[  9 , 13 >",
    positionId: 8,
  },
  {
    id: 40,
    range: "[  6 ,  9 >",
    positionId: 8,
  },
  {
    id: 41,
    range: "[ 22 , ∞ >",
    positionId: 9,
  },
  {
    id: 42,
    range: "[ 17 , 22 >",
    positionId: 9,
  },
  {
    id: 43,
    range: "[ 13 , 27 >",
    positionId: 9,
  },
  {
    id: 44,
    range: "[  9 , 13 >",
    positionId: 9,
  },
  {
    id: 45,
    range: "[  6 ,  9 >",
    positionId: 9,
  },
  {
    id: 46,
    range: "[ 22 , ∞ >",
    positionId: 10,
  },
  {
    id: 47,
    range: "[ 17 , 22 >",
    positionId: 10,
  },
  {
    id: 48,
    range: "[ 13 , 27 >",
    positionId: 10,
  },
  {
    id: 49,
    range: "[  9 , 13 >",
    positionId: 10,
  },
  {
    id: 50,
    range: "[  6 ,  9 >",
    positionId: 10,
  },
  {
    id: 51,
    range: "[ 22 , ∞ >",
    positionId: 11,
  },
  {
    id: 52,
    range: "[ 17 , 22 >",
    positionId: 11,
  },
  {
    id: 53,
    range: "[ 13 , 27 >",
    positionId: 11,
  },
  {
    id: 54,
    range: "[  9 , 13 >",
    positionId: 11,
  },
  {
    id: 55,
    range: "[  6 ,  9 >",
    positionId: 11,
  },
  {
    id: 56,
    range: "[ 22 , ∞ >",
    positionId: 12,
  },
  {
    id: 57,
    range: "[ 17 , 22 >",
    positionId: 12,
  },
  {
    id: 58,
    range: "[ 13 , 27 >",
    positionId: 12,
  },
  {
    id: 59,
    range: "[  9 , 13 >",
    positionId: 12,
  },
  {
    id: 60,
    range: "[  6 ,  9 >",
    positionId: 12,
  },
];

const positionsMod = positions.map((position) => {
  const sizesTemp = [];
  sizes.forEach((size) => {
    if (size.positionId == position.id) {
      sizesTemp.push(size);
    }
  });

  return {
    ...position,
    sizes: sizesTemp,
  };
});

console.log(positionsMod);
