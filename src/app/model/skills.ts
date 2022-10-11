export class Skills {
  id: number;
  nameSkill: string;
  progress: number;
  percentage: number;
  imgSkill: string;
  imgbSkill: string;
  color: number;

  constructor(nameSkill: string, progress: number, percentage: number, imgSkill: string, imgbSkill: string, color: number) {
    this.nameSkill = nameSkill;
    this.progress = progress;
    this.percentage = percentage;
    this.imgSkill = imgSkill;
    this.imgbSkill = imgbSkill;
    this.color = color;
  }
}
