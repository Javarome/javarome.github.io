import {skillList_en} from "./SkillList_en.mjs"
import {experience_en} from "./Experience_en.mjs"

/**
 * @type {ResumeMessages}
 */
export const en = {
  people: {
    title: "Senior developer & team leader",
    statement: "+25 years of front and back development experience, leading and motivating developers teams. I design my projects to stay maintainables and allow integrating changes quickly. Spécialised in standard and vanilla web. I can handle a project from requirements definition to production."
  },
  skills: {
    title: "Skills",
    none: (search) => `⚠️ No "${search}" skill`,
    list: skillList_en
  },
  experience: experience_en,
  training: {
    title: "Training"
  }
}
