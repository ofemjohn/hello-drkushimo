// TODO: add website URLs for each organization once Dr. Kushimo provides them.
export type MinistryEntry = {
  name: string;
  role: string;
  description: string;
  href?: string;
};

export const ministryEntries: MinistryEntry[] = [
  {
    name: "Anna Foundation",
    role: "Founder",
    description:
      "Empowers women—especially widows—by equipping them with business skills and financial resources.",
  },
  {
    name: "Operation Preach Social Work Initiative (OPSWI)",
    role: "Advisory Board Member",
    description:
      "A youth-led movement advancing grassroots social work in Nigeria and across Africa.",
  },
  {
    name: "Vital Health International",
    role: "Director of Implementation",
    description:
      "Champions health improvement initiatives across Africa and the Americas.",
  },
  {
    name: "City of David Atlanta",
    role: "Pastor & Director of Implementation and Administration",
    description:
      "Serves the congregation in pastoral care alongside ministry implementation and administration.",
  },
];
