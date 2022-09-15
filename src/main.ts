import k from "@/game";
import loadAssets from "@/loadAssets";
import { SCENE_KEY as DEMO_SCENE_KEY } from "@/scenes/demoScene";

loadAssets();

k.go(DEMO_SCENE_KEY);
