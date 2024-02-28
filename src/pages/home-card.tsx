import { HoverEffect } from "../components/ui/home-card";
import projects from '../assets/json/home-card.json'


export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-2">
      <HoverEffect items={projects} />
    </div>
  );
}
