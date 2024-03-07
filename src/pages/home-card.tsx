import { HoverEffect } from "../components/ui/home-card";

interface ProjectType {
  project:{
    title:string;
    description:string;
  }[]
}

export function CardHoverEffectDemo(props: ProjectType) {
  return (
    <div className="max-w-5xl mx-auto px-2">
      <HoverEffect items={props.project} />
    </div>
  );
}
