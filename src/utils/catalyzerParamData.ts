export interface CatalyzerParamDatas {
  hole: number;
  outWallThickness: number;
  inWallThickness: number;
  pitch: number;
  aperture: number;
  openHoleRatio: number;
  specificSurfaceArea: number;
  bulkDensity: number;
}
const catalyzerParamDatas = [
  {
    hole: 11,
    outWallThickness: 2.6,
    inWallThickness: 1.78,
    pitch: 13.4,
    aperture: 11.6,
    openHoleRatio: 72.14,
    specificSurfaceArea: 249
  },
  {
    hole: 12,
    outWallThickness: 2.4,
    inWallThickness: 1.63,
    aperture:12.2,
    pitch: 10.6,
    openHoleRatio: 72.14,
    specificSurfaceArea: 272
  },
  {
    hole: 13,
    outWallThickness: 2.3,
    inWallThickness: 1.5,
    aperture:11.6,
    pitch: 10.1,
    openHoleRatio: 76,
    specificSurfaceArea: 302,
    bulkDensity: 380
  },
  {
    hole: 14,
    outWallThickness: 2.2,
    inWallThickness: 1.40,
    aperture:10.5,
    pitch: 9.1,
    openHoleRatio: 72.14,
    specificSurfaceArea: 317
  },
  {
    hole: 15,
    outWallThickness: 2.2,
    inWallThickness: 1.30,
    aperture:9.8,
    pitch: 8.5,
    openHoleRatio: 72.25,
    specificSurfaceArea: 340,
    bulkDensity: 400
  },
  {
    hole: 16,
    outWallThickness: 2,
    inWallThickness: 1.2,
    aperture: 9.2,
    pitch: 8,
    openHoleRatio: 72.82,
    specificSurfaceArea: 364,
    bulkDensity: 410
  },
  {
    hole: 17,
    outWallThickness: 1.8,
    inWallThickness: 1.15,
    aperture:8.65,
    pitch: 7.5,
    openHoleRatio: 72.3,
    specificSurfaceArea: 385,
    bulkDensity: 420
  },
  {
    hole: 18,
    outWallThickness: 1.7,
    inWallThickness: 1.0,
    aperture: 8.2,
    pitch: 7.2,
    openHoleRatio: 75.2,
    specificSurfaceArea: 415,
    bulkDensity: 420
  },
  {
    hole: 19,
    outWallThickness: 1.7,
    inWallThickness: 1.0,
    aperture:7.75,
    pitch: 6.75,
    openHoleRatio: 73.1,
    specificSurfaceArea: 433,
    bulkDensity: 425
  },
  {
    hole: 20,
    outWallThickness: 1.5,
    inWallThickness: 1.0,
    aperture: 7.4,
    pitch: 6.4,
    openHoleRatio: 73.3,
    specificSurfaceArea: 456,
    bulkDensity: 430
  },
  {
    hole: 21,
    outWallThickness: 1.5,
    inWallThickness: 0.95,
    aperture:7.05,
    pitch: 6.1,
    openHoleRatio: 72.93,
    specificSurfaceArea: 478,
    bulkDensity: 435
  },
  {
    hole: 22,
    outWallThickness: 1.5,
    inWallThickness: 0.9,
    aperture: 6.7,
    pitch: 5.8,
    openHoleRatio: 72.36,
    specificSurfaceArea: 499,
    bulkDensity: 440
  },
  {
    hole: 23,
    outWallThickness: 1.5,
    inWallThickness: 0.85,
    aperture: 6.4,
    pitch: 5.55,
    openHoleRatio: 72.42,
    specificSurfaceArea: 522,
    bulkDensity: 445
  },
  {
    hole: 24,
    outWallThickness: 1.5,
    inWallThickness: 0.85,
    aperture:6.15,
    pitch: 5.3,
    openHoleRatio: 71.91,
    specificSurfaceArea: 543,
    bulkDensity: 450
  },
  {
    hole: 25,
    outWallThickness: 1.5,
    inWallThickness: 0.8,
    aperture:5.9,
    pitch: 5.1,
    openHoleRatio: 73.2,
    specificSurfaceArea: 569,
    bulkDensity: 455
  },
  {
    hole: 26,
    outWallThickness: 1.75,
    inWallThickness: 0.75,
    aperture:5.65,
    pitch: 4.90,
    openHoleRatio: 72.14,
    specificSurfaceArea: 589
  },
  {
    hole: 27,
    outWallThickness: 1.72,
    inWallThickness: 0.72,
    aperture:5.4,
    pitch: 4.72,
    openHoleRatio: 72.14,
    specificSurfaceArea: 612
  },
  {
    hole: 28,
    outWallThickness: 1.3,
    inWallThickness: 0.8,
    aperture:5.3,
    pitch: 4.5,
    openHoleRatio: 70.5,
    specificSurfaceArea: 626,
    bulkDensity: 480
  },
  {
    hole: 29,
    outWallThickness: 1.67,
    inWallThickness: 0.67,
    aperture:5.07,
    pitch: 4.39,
    openHoleRatio: 72.14,
    specificSurfaceArea: 657
  },
  {
    hole: 30,
    outWallThickness: 1.4,
    inWallThickness: 0.7,
    aperture: 4.9,
    pitch: 4.2,
    openHoleRatio: 71.4,
    specificSurfaceArea: 667,
    bulkDensity: 500
  },
  {
    hole: 31,
    outWallThickness: 1.63,
    inWallThickness: 0.63,
    aperture:4.74,
    pitch: 4.11,
    openHoleRatio: 72.14,
    specificSurfaceArea: 702
  },
  {
    hole: 32,
    outWallThickness: 1.61,
    inWallThickness: 0.61,
    aperture: 4.59,
    pitch: 3.98,
    openHoleRatio: 72.14,
    specificSurfaceArea: 725
  },
  {
    hole: 33,
    outWallThickness: 1.59,
    inWallThickness: 0.59,
    aperture:4.45,
    pitch: 3.86,
    openHoleRatio: 72.14,
    specificSurfaceArea: 747
  },
  {
    hole: 34,
    outWallThickness: 1.57,
    inWallThickness: 0.57,
    aperture:4.32,
    pitch: 3.75,
    openHoleRatio: 72.14,
    specificSurfaceArea: 770
  },
  {
    hole: 35,
    outWallThickness: 1.4,
    inWallThickness: 0.6,
    aperture: 4.3,
    pitch: 3.7,
    openHoleRatio: 69.5,
    specificSurfaceArea: 780,
    bulkDensity: 520
  },
  {
    hole: 36,
    outWallThickness: 1.54,
    inWallThickness: 0.54,
    aperture: 4.08,
    pitch: 3.54,
    openHoleRatio: 72.14,
    specificSurfaceArea: 815
  },
  {
    hole: 37,
    outWallThickness: 1.53,
    inWallThickness: 0.53,
    aperture: 3.97,
    pitch: 3.44,
    openHoleRatio: 72.14,
    specificSurfaceArea: 838
  },
  {
    hole: 38,
    outWallThickness: 1.51,
    inWallThickness: 0.51,
    aperture: 3.87,
    pitch: 3.35,
    openHoleRatio: 72.14,
    specificSurfaceArea: 861
  },
  {
    hole: 39,
    outWallThickness: 1.50,
    inWallThickness: 0.50,
    aperture: 3.77,
    pitch: 3.27,
    openHoleRatio: 72.14,
    specificSurfaceArea: 883
  },
  {
    hole: 40,
    outWallThickness: 1.4,
    inWallThickness: 0.6,
    aperture: 3.8,
    pitch: 3.2,
    openHoleRatio: 68.8,
    specificSurfaceArea: 887,
    bulkDensity: 540
  },
  {
    hole: 41,
    outWallThickness: 1.28,
    inWallThickness: 0.48,
    aperture: 3.58,
    pitch: 3.11,
    openHoleRatio: 72.14,
    specificSurfaceArea: 929
  },
  {
    hole: 42,
    outWallThickness: 1.27,
    inWallThickness: 0.47,
    aperture: 3.50,
    pitch: 3.03,
    openHoleRatio: 72.14,
    specificSurfaceArea: 951
  },
  {
    hole: 43,
    outWallThickness: 1.25,
    inWallThickness: 0.45,
    aperture: 3.42,
    pitch: 2.96,
    openHoleRatio: 72.14,
    specificSurfaceArea: 974
  },
  {
    hole: 44,
    outWallThickness: 1.24,
    inWallThickness: 0.44,
    aperture: 3.34,
    pitch: 2.90,
    openHoleRatio: 72.14,
    specificSurfaceArea: 997
  },
  {
    hole: 45,
    outWallThickness: 1.35,
    inWallThickness: 0.5,
    aperture: 3.2,
    pitch: 2.7,
    openHoleRatio: 65.6,
    specificSurfaceArea: 972,
    bulkDensity: 570
  },
  {
    hole: 46,
    outWallThickness: 1.22,
    inWallThickness: 0.42,
    aperture: 3.19,
    pitch: 2.77,
    openHoleRatio: 72.14,
    specificSurfaceArea: 1042
  },
  {
    hole: 47,
    outWallThickness: 1.22,
    inWallThickness: 0.42,
    aperture: 3.13,
    pitch: 2.71,
    openHoleRatio: 72.14,
    specificSurfaceArea: 1065
  },
  {
    hole: 48,
    outWallThickness: 1.21,
    inWallThickness: 0.41,
    aperture: 3.06,
    pitch: 2.65,
    openHoleRatio: 72.14,
    specificSurfaceArea: 1087
  },
  {
    hole: 49,
    outWallThickness: 1.20,
    inWallThickness: 0.40,
    aperture: 3.00,
    pitch: 2.60,
    openHoleRatio: 72.14,
    specificSurfaceArea: 1110
  },
  {
    hole: 50,
    outWallThickness: 1.31,
    inWallThickness: 0.61,
    aperture:3.07,
    pitch: 2.46,
    openHoleRatio: 67,
    specificSurfaceArea: 1091
  },
  {
    hole: 51,
    outWallThickness: 1.18,
    inWallThickness: 0.38,
    aperture: 2.88,
    pitch: 2.50,
    openHoleRatio: 72.14,
    specificSurfaceArea: 1155
  },
  {
    hole: 52,
    outWallThickness: 1.18,
    inWallThickness: 0.38,
    aperture: 2.83,
    pitch: 2.45,
    openHoleRatio: 72.14,
    specificSurfaceArea: 1178
  },
  {
    hole: 53,
    outWallThickness: 1.17,
    inWallThickness: 0.37,
    aperture: 2.77,
    pitch: 2.40,
    openHoleRatio: 72.14,
    specificSurfaceArea: 1200
  },
  {
    hole: 54,
    outWallThickness: 1.16,
    inWallThickness: 0.36,
    aperture:2.72,
    pitch: 2.36,
    openHoleRatio: 72.14,
    specificSurfaceArea: 1223
  },
  {
    hole: 55,
    outWallThickness: 1.16,
    inWallThickness: 0.36,
    aperture: 2.67,
    pitch: 2.32,
    openHoleRatio: 72.14,
    specificSurfaceArea: 1246
  },
];

export default catalyzerParamDatas;