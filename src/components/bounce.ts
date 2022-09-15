import k from "@/game";
import type { PosComp } from "kaboom";
import { clamp } from "@/utils/math";

export enum BounceDirection {
  Up = -1,
  Down = 1,
}

export type BounceComp = {
  startY: number;
  endY: number;
  bounceSpeed: number;
  bounceAmount: number;
  bounceDir: BounceDirection;
};

export default function bounce() {
  return {
    id: "bounce",
    require: ["pos", "sprite"],
    startY: 0,
    endY: 0,
    bounceDir: BounceDirection.Up,
    bounceSpeed: 50,
    bounceAmount: 50,
    add(this: PosComp & BounceComp) {
      this.startY = this.pos.y;
      this.endY = this.startY - this.bounceAmount;
    },
    update(this: PosComp & BounceComp) {
      if (this.bounceDir > 0 && this.pos.y >= this.startY) {
        this.bounceDir = -1;
      } else if (this.bounceDir < 0 && this.pos.y <= this.endY) {
        this.bounceDir = 1;
      }
      const nextPosition =
        this.pos.y + k.dt() * this.bounceSpeed * this.bounceDir;
      this.pos.y = clamp(this.endY, this.startY, nextPosition);
    },
  };
}
