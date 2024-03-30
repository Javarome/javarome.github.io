# CV

Dynamic resume rendering.

## Model

- `Skill`: a name, description and URL for a skill, as well other skills implied by this one.
- `Organization`: a company or school you had experience with.
- `Contract`: a timeframed work for an organization.
- `Place`: a named location for organizations or people.
- `Experience`: a work done during a contract.
  - `Training`: an experience in a school.
- `Resume`: a set of people (+ title + statement) and experiences. 
- `ResumeBuilder` helps to build a resume.

## Rendering

`ResumeRenderer` renders a resume with a given skill search, by instantiating a number of web components:
- `ExperienceComponent`: a web component that renders an experience. It displays the experience/project along with the relevant skills and implied skills.
- `HistoryComponent`: a web component that renders a chronological list of experiences. It groups experiences by contract.
- `SearchComponent`: search input field.

Each component has an encapsulated style but supports:
- dark mode
- removing UI widgets when printing

Most of rendering rules are in CSS and so can be changed from there.
