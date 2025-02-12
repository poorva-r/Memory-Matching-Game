import click from "../assets/sounds/click.mp3";
import flip from "../assets/sounds/flip.wav";
import fireworks from "../assets/sounds/fireworks.wav";
import ding from "../assets/sounds/ding.wav";
import lose from "../assets/sounds/losing.wav";

export const sounds = {
  click: new Audio(click),
  flip: new Audio(flip),
  fireworks: new Audio(fireworks),
  ding: new Audio(ding),
  lose: new Audio(lose),
};

sounds.click.load();
sounds.flip.load();
sounds.fireworks.load();
sounds.ding.load();
sounds.lose.load();