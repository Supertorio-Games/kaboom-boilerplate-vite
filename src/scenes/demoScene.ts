import k from "@/game";
import { logo } from "@/entities/logo";
export const SCENE_KEY = "demo";

export const DemoScene = k.scene(SCENE_KEY, () => {
  k.add([logo(k.vec2(k.width() / 2, k.height() / 2))]);
});
