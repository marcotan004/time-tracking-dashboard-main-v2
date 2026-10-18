# Learn React by migrating your dashboard

## Summary

Migrate the existing website to **React with TypeScript and Vite**, using guided tickets you implement yourself. Preserve the design, Sass, assets, accessibility, and timeframe behavior.

React changes how you describe updates: instead of finding elements and changing their text/classes, you update state and React renders the matching UI. This is the main learning goal.

Vite is an appropriate setup for learning React in a small client-side app. See [React's setup guidance](https://react.dev/learn/build-a-react-app-from-scratch).

## Stack and boundaries

- **React + React DOM:** components, rendering, events, and state.
- **TypeScript:** explicit activity, timeframe, and component prop types.
- **Vite:** development server and production builds.
- **Sass:** reuse your current styles, compiled through Vite.
- **ESLint with React Hooks rules + Prettier:** catch common mistakes and standardize formatting.
- **Vitest + React Testing Library:** add focused interaction tests after the migration works.

Keep this as one page. Routing, global state libraries, UI kits, and server-data libraries can wait until a project introduces a need for them.

## 1. Establish the baseline and tooling

- [x] Record the current mobile/desktop appearance and expected timeframe values.
- [x] Preserve the working version in Git and migrate on `codex/react-migration`.
- [x] Add Vite's React TypeScript setup to this repository without overwriting challenge assets, documentation, or instructions.
- [x] Add development, build, type-check, lint, and formatting-check scripts.
- [x] Use an actively supported Node version compatible with current Vite requirements. See the [Vite setup guide](https://vite.dev/guide/).

**Done when:** A minimal React page runs locally and the production build succeeds.

## 2. Build a reusable, prop-driven profile component

- [x] Create the React entry point and an `App` component.
- [x] Build a static `ProfileCard`, including its existing semantic markup.
- [ ] Define TypeScript props for the person's name and profile image URL.
- [ ] Pass the profile details from `App` and render them through JSX expressions in `ProfileCard`.
- [x] Keep profile details in props rather than copying them into component state; derive meaningful image alt text from the supplied name.
- [x] Temporarily supply a different name and image from `App` to verify that the same component displays another person, then restore Jeremy's details.
- [x] Learn `className`, JSX expressions, component names, and self-closing tags.
- [x] Import the existing Sass entry directly; remove the HTML link to separately compiled CSS.
- [x] Keep images under `public/images` and update Sass image URLs to `/images/...`.
- [x] Load Rubik in the React app's HTML and verify the portrait, fonts, and responsive profile layout in the browser.

Receiving props makes the profile respond to the values its parent supplies. No profile state or effect is needed for these static details. Timeframe selection and its controls remain in section 5, where the same state will also drive the activity cards.

**Done when:** `ProfileCard` displays the name and image supplied by `App`, has appropriate image alt text, matches its previous appearance on mobile and desktop, and Sass edits update through Vite. Type checking and the production build pass.

## 3. Build a typed activity component

- [x] Define `Timeframe` as the union `daily | weekly | monthly`.
- [x] Define an `Activity` type containing its title and current/previous hours for every timeframe.
- [x] Create `ActivityCard` with `activity` and `timeframe` props.
- [x] Derive the displayed hours, period label, and modifier class from those props.
- [x] Keep labels as a typed mapping shared by rendering code.

**Done when:** One card renders any supplied activity/timeframe without DOM queries.

## 4. Render all activities from data

- [ ] Import the bundled JSON directly for this migration, using a typed assignment to check its expected shape.
- [ ] Render the cards using `.map()` with activity titles as stable keys.
- [ ] Keep this local dataset outside state because it does not change.
- [ ] Remove manually duplicated card markup once all six cards render correctly.

**Done when:** All six cards come from the same component and dataset.

## 5. Add React state and timeframe controls

- [ ] Store only the selected timeframe in `App` using `useState<Timeframe>`, initially `daily`.
- [ ] Create `TimeframeControls` with `selectedTimeframe` and `onTimeframeChange` props.
- [ ] Use React `onClick` handlers to request a timeframe change.
- [ ] Derive `.is-selected` and `aria-pressed` from the selected timeframe.
- [ ] Pass that same timeframe to every activity card.

**Done when:** One state update changes the highlight, hours, and labels together. Follow React's guidance to keep state minimal and derive other values from it: [Thinking in React](https://react.dev/learn/thinking-in-react).

## 6. Remove the imperative implementation

- [ ] Remove the previous DOM mutation modules and their script entry after parity is confirmed.
- [ ] Eliminate `querySelector`, `textContent`, `classList`, and manual event registration from dashboard behavior.
- [ ] Keep component-local helpers private; export only components and shared types needed elsewhere.
- [ ] Finish ESLint and Prettier configuration without unrelated CSS redesign.

**Done when:** React owns the dashboard UI, and type checking, linting, formatting checks, and production build pass.

## 7. Verify behavior and reflect

- [ ] Add tests for initial Daily selection and switching to Weekly and Monthly.
- [ ] Assert all six cards show matching current/previous values and correct labels.
- [ ] Verify that exactly one timeframe button is pressed after each selection.
- [ ] Manually test keyboard controls, visible focus, hover states, asset loading, and layout at 320, 375, 768, and 1440px.
- [ ] Write three notes explaining props, state, and callbacks using examples from your implementation.

**Done when:** Behavior and appearance match the original, automated checks pass, and you can explain how a click produces a render.

## Assumptions and next steps

- You write the implementation; guidance and reviews support each ticket without supplying a complete solution.
- This migration uses bundled JSON deliberately: a static local file does not require fetching or an effect. A later, separate exercise can restore asynchronous loading with loading/error states.
- TypeScript is included immediately because you already know it.
- Future libraries should follow concrete needs: learn routing when adding pages and server-data tools when introducing a real API. Finish React fundamentals before expanding the stack.
