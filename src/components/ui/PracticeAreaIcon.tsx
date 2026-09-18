import React from "react";
import {
  Briefcase,
  Scale,
  Gavel,
  Building2,
  Users2,
  ShieldCheck,
  HeartHandshake,
  FileCheck2,
  HelpCircle,
  LucideProps,
} from "lucide-react";

interface PracticeAreaIconProps extends LucideProps {
  name: string;
}

export default function PracticeAreaIcon({ name, ...props }: PracticeAreaIconProps) {
  switch (name) {
    case "Briefcase":
      return <Briefcase {...props} />;
    case "Scale":
      return <Scale {...props} />;
    case "Gavel":
      return <Gavel {...props} />;
    case "Building2":
      return <Building2 {...props} />;
    case "Users2":
      return <Users2 {...props} />;
    case "ShieldCheck":
      return <ShieldCheck {...props} />;
    case "HeartHandshake":
      return <HeartHandshake {...props} />;
    case "FileCheck2":
      return <FileCheck2 {...props} />;
    default:
      return <HelpCircle {...props} />;
  }
}
