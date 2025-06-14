import {ResumeMessages} from "./ResumeMessages.mjs"
import {skillList_en} from "./skill/SkillList_en.mjs"
import {experience_en} from "./history/experience/Experience_en.mjs"
import {history_en} from "./history/HistoryMessages_en.mjs"
import {personal_en} from "./history/experience/Personal_en.mjs"

class ResumeMessages_en extends ResumeMessages {
  people = {
    title: "Senior developer & team leader",
    statement: "+25 years of front and back development experience, leading and motivating developers teams. I design my projects to stay maintainables and allow integrating changes quickly. Spécialised in standard and vanilla web. I can handle a project from requirements definition to production."
  }
  skills = {
    title: "Skills",
    none: (search) => `⚠️ No "${search}" skill`,
    list: skillList_en
  }
  experience = experience_en
  personal = personal_en
  training = {
    title: "Education",
    history: history_en
  }
}

export const en = new ResumeMessages_en()
