# CV

Dynamic resume rendering.

## Model

- `Skill`:
- `Organization`: a company or school you had experience with.
- `Contract`: a timeframed work for an organization.
- `Place`: a named location for organizations or people.
- `Experience`
  - `Training`
- `Resume`: a set of people (+ title + statement) and experiences. 
- `ResumeBuilder` helps to build a resume.

## Rendering

- `ExperienceComponent`: a web component that renders an experience
- `HistoryComponent`: a web component that renders a chronological list of experiences
- `ResumeRenderer`: renders a resume with a given skill search.
- `SearchComponent`: search input field.

Each component has an encapsulated style but supports:
- dark mode
- removing UI widgets when printing
