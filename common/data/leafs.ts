import { ILeaf } from "../interfaces/general.interface";

export const leavesGenerated = (contador: number): ILeaf[] => {
  return Array.from({ length: contador }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: -10,
    duration: 15 + Math.random() * 15,
    delay: Math.random() * 5,
    size: 20 + Math.random() * 50,
    opacity: 0.1 * Math.random() * 0.9,
  }));
};
