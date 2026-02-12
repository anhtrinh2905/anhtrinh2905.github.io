export type Media =
  | {
      type: "image";
      src: string;
      alt: string;
      width?: number; // optional, for Next Image
      height?: number; // optional, for Next Image
    }
  | {
      type: "video";
      src: string;
      poster?: string;
    };

export type ProjectShowcaseCardProps = {
  title: string;
  description: string;
  techs: string[];
  codeUrl?: string;
  detailUrl?: string;
  media: Media;

  // Optional styling knobs
  accentClassName?: string; // e.g. "bg-[#4a2b63]"
  className?: string;
};
