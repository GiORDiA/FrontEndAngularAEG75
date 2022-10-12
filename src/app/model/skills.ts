export class Skills {
  id: number;
  nameSkill: string;
  progress: number;
  percentage: number;
  imgSkill: string;
  imgbSkill: string;
  color: string;

  constructor(nameSkill: string, progress: number, percentage: number, imgSkill: string, imgbSkill: string, color: string) {
    this.nameSkill = nameSkill;
    this.progress = progress;
    this.percentage = percentage;
    this.imgSkill = imgSkill;
    this.imgbSkill = imgbSkill;
    this.color = color;
  }
}
