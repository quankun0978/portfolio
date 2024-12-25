export interface ISkill {
  id: number;
  title: string;
  image: string;
  percent: string;
}

export interface ISkillCard {
  skill: ISkill;
}
