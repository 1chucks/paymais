import { AppImg } from "@/lib";
import { Dumbbell, Info, LucideBeaker, LucideIcon } from "lucide-react";





export const serviceData: { title: string; Icon: LucideIcon }[] = [
  {
    title: "Health Tips",
    Icon: Info,
  },
  {
    title: "Exercise Program",
    Icon: Dumbbell,
  },
  {
    title: "Book a test",
    Icon: LucideBeaker,
  },
]


export const dataQuickActions: { title: string; icon: string }[] = [
  {
    title: "See a Therapist",
    icon: AppImg.med.emoji_love,
  },
  {
    title: "Talk to a Nurse",
    icon: AppImg.med.stethoscope,
  },
  {
    title: "See a Doctor",
    icon: AppImg.med.stethoscope,
  },
  {
    title: "See a Pharmacist",
    icon: AppImg.med.tablet,
  },
  {
    title: "See a lab scientist",
    icon: AppImg.med.test,
  },
]