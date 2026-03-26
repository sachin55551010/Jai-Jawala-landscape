import type { LucideIcon } from "lucide-react";
import { MoveUpRight } from "lucide-react";
import plant from "../../assets/plant.jpg";
import design from "../../assets/design.jpg";
import maintenance from "../../assets/maintenance.jpg";
import consultation from "../../assets/consultant.jpg";
type ServieList = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
};
export const serviceList: ServieList[] = [
  {
    title: "GARDEN DESIGN",
    description:
      "Crafting the perfect garden space. We design a garden that suits your lifestyle",
    icon: MoveUpRight,
    image: design,
  },
  {
    title: "PLANT SELECTION",
    description:
      "Hand-picked greenery for your garden. Our expert selects the right plants.",
    icon: MoveUpRight,
    image: plant,
  },
  {
    title: "GARDEN MAINTENANCE",
    description:
      "Preserve your garden's allure. We offer ongoing maintenance services",
    icon: MoveUpRight,
    image: maintenance,
  },
  {
    title: "GARDEN CONSULTATION",
    description:
      "Expert advice at your fingertips. Consult with us to get valuable insights",
    icon: MoveUpRight,
    image: consultation,
  },
];
