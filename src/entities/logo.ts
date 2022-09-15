import { Vec2 } from "kaboom";
import k from "@/game";
import bounce from "@/components/bounce";

export const logo = (startPosition: Vec2) => [
  k.add([
    k.sprite("startGraphic"),
    k.origin("center"),
    k.pos(startPosition),
    bounce(),
  ]),
];
