import { AppImg } from "@/lib"

export type IChatData = {
  name: string
  department: string
  img: string
  desc: string
  email: string
  phone: string
}
export const chatData: IChatData[] = [
  {
    name: "Dr. Chuks Okolie",
    department: "Peadiatric",
    img: AppImg.profile.blackDude,
    email: "philixbob@gmail.com",
    phone: "23408108850572",
    desc: `Dr. Chuks is a dedicated pediatrician with a 
    passion for providing comprehensive healthcare to
    children from infancy through adolescence.
    With a warm and compassionate approach,
    Dr. Chuks specializes in preventive care,
    diagnosis, and treatment of a wide range of pediatric conditions.
    Committed to fostering healthy growth and development, Dr. Chuks
    partners with families to ensure each child achieves their full
    potential in a nurturing and supportive environment.`,
  },
  {
    name: "Nurs. Lena Hertz",
    department: "Emergency",
    img: AppImg.profile.lena,
    email: "lena@celo.org",
    phone: "23408108850573",
    desc: `Dr. Lena is a dedicated pediatrician with a 
    passion for providing comprehensive healthcare to
    children from infancy through adolescence.
    With a warm and compassionate approach,
    Dr. Lena specializes in preventive care,
    diagnosis, and treatment of a wide range of pediatric conditions.
    Committed to fostering healthy growth and development, Dr.Lena
    partners with families to ensure each child achieves their full
    potential in a nurturing and supportive environment.`,
  },
  {
    name: "Dr. Millie Bobbie",
    department: "Orthopedic",
    img: AppImg.profile.coffeLady,
    email: "millie@gmail.com",
    phone: "23408108850574",
    desc: `Dr. Millie is a dedicated pediatrician with a 
    passion for providing comprehensive healthcare to
    children from infancy through adolescence.
    With a warm and compassionate approach,
    Dr. Millie specializes in preventive care,
    diagnosis, and treatment of a wide range of pediatric conditions.
    Committed to fostering healthy growth and development, Dr. Millie
    partners with families to ensure each child achieves their full
    potential in a nurturing and supportive environment.`,
  },
  {
    name: "Dr. Raymond Lin",
    department: "Obstetrics",
    img: AppImg.profile.blackguy,
    email: "raymond@gmail.com",
    phone: "23408108850575",
    desc: `Dr. Chuks is a dedicated pediatrician with a 
    passion for providing comprehensive healthcare to
    children from infancy through adolescence.
    With a warm and compassionate approach,
    Dr. Chuks specializes in preventive care,
    diagnosis, and treatment of a wide range of pediatric conditions.
    Committed to fostering healthy growth and development, Dr. Raymond
    partners with families to ensure each child achieves their full
    potential in a nurturing and supportive environment.`,
  },
  {
    name: "Pharm. Rena Lin",
    department: "Pharmacy",
    img: AppImg.profile.blackWoman,
    email: "rayray@gmail.com",
    phone: "23408108850576",
    desc: `Raymond is a knowledgeable and dedicated pharmacist committed to 
    providing exceptional pharmaceutical care and support to the community.
    With extensive expertise in medication management, patient counseling,
    and drug safety, Raymond ensures that each patient receives the correct
    medications and understands their proper use. Passionate about promoting
    health and wellness, Raymond works closely with healthcare providers to optimize
    treatment outcomes and enhance patient well-being.`,
  },
]
