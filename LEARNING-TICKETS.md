# Time Tracking Dashboard: Learning Tickets

Work through these tickets in order. Each one is intentionally small so you can learn Sass, responsive CSS, and JavaScript without having to debug everything at once.

## 1. Project setup: add a Sass workflow

**Goal:** Learn how Sass fits into a normal HTML/CSS project.

- [x] Install Sass and add a script that watches your `.scss` file and outputs a `.css` file.
- [x] Create a `scss/` folder and one main Sass file.
- [x] Update your HTML to load the compiled CSS file.
- [x] Confirm that a small Sass change appears in the browser after compilation.

**Learning focus:** Sass compiles into regular CSS. The browser only receives the CSS file.

**Done when:** Changing the Sass file updates the page styling after compilation.

## 2. Study the design and define your layout plan

**Goal:** Practice translating a visual design into page sections.

- [x] Compare the mobile and desktop images in `design/`.
- [x] Identify the major pieces: profile card, timeframe controls, and six activity cards.
- [x] Decide which parts are repeated and should share the same HTML and CSS structure.
- [x] Write a short note about where you think Grid fits and where Flexbox fits.

**Learning focus:** Flexbox is ideal inside small components. CSS Grid is likely useful for the overall desktop dashboard.

**Done when:** You can describe the page structure before styling it.

## 3. Build semantic dashboard HTML

**Goal:** Create a solid, accessible structure before visual styling.

- [x] Add the profile section and three timeframe controls.
- [x] Add the six activity cards: Work, Play, Study, Exercise, Social, and Self Care.
- [x] Use actual buttons for the timeframe controls.
- [x] Give every card a clear heading.
- [x] Keep repeated cards consistent in structure.

**Learning focus:** Good HTML makes styling and JavaScript much easier later.

**Done when:** All required content is visible and understandable with CSS disabled.

## 4. Create Sass design tokens

**Goal:** Use Sass variables for values that repeat.

- [x] Add a partial Sass file for colors, font weights, spacing, border radius, and breakpoints.
- [x] Use the style guide’s colors and Rubik font weights.
- [x] Import or forward these tokens into your main Sass file.

**Learning focus:** Variables let you change a repeated design choice in one place.

**Done when:** At least colors and common spacing values are not repeated as raw values throughout your styles.

## 5. Add global styles and typography

**Goal:** Establish a consistent base for the entire page.

- [x] Set the page background, Rubik font, text defaults, and box sizing.
- [x] Remove default browser spacing where appropriate.
- [x] Ensure readable contrast and sensible line-height.
- [x] Load Rubik with the required 300, 400, and 500 weights.

**Learning focus:** Base styles prevent small inconsistencies from building up component by component.

**Done when:** The page feels visually consistent before detailed layout work begins.

## 6. Style the profile card and timeframe controls

**Goal:** Build the fixed sidebar-style component first.

- [x] Match the mobile profile layout.
- [x] Create visible active, hover, and keyboard-focus states for Daily, Weekly, and Monthly.
- [x] On desktop, adapt it to the taller left-side card shown in the design.

**Learning focus:** Interactive elements need both mouse and keyboard feedback. Hover alone is not enough.

**Done when:** The controls look clickable and can be tabbed to with a clearly visible focus state.

## 7. Build one reusable activity card

**Goal:** Learn component thinking before repeating the design.

- [x] Start with Work only.
- [x] Create its colored background layer, icon, content area, title, current hours, previous-period text, and ellipsis control.
- [x] Match the mobile design first.
- [x] Add the card hover state.

**Learning focus:** Build and refine one pattern before copying it. This makes bugs much easier to fix.

**Done when:** The Work card looks close to the mobile reference at 375px.

## 8. Apply the card pattern to all activities

**Goal:** Reuse a structure while allowing small visual differences.

- [ ] Add the remaining five cards.
- [ ] Use the supplied image assets for each card’s icon.
- [ ] Give each card its correct accent color.
- [ ] Keep internal spacing and type hierarchy consistent.

**Learning focus:** Reusable HTML classes plus Sass nesting should make shared styles clear. Avoid nesting selectors too deeply.

**Done when:** All six cards display correctly with their own names, colors, and icons.

## 9. Create the responsive dashboard layout

**Goal:** Make the design work from small phones through desktop.

- [x] Start mobile-first: one-column content at narrow widths.
- [x] Add a breakpoint where the activity cards become a multi-column grid.
- [x] At desktop, place the profile card beside the card grid.
- [x] Test 320px, 375px, 768px, and 1440px—not only the two supplied design widths.

**Learning focus:** A media query should respond to where the layout becomes cramped, not merely copy a device name.

**Done when:** Nothing overflows horizontally, and the design transitions smoothly between sizes.

## 10. Add activity data from `data.json`

**Goal:** Practice a useful, beginner-friendly JavaScript workflow.

- [ ] Use `fetch()` to read the local JSON data.
- [ ] Log the loaded data first, so you can inspect its shape in DevTools.
- [ ] Use the data to populate card titles and hours.
- [ ] Keep the card layout separate from the data-handling logic as much as possible.

**Learning focus:** Data is easier to use when you first inspect it, then decide exactly which values your UI needs.

**Done when:** The card content comes from `data.json`, rather than being duplicated manually in the HTML.

## 11. Make Daily, Weekly, and Monthly controls work

**Goal:** Connect button events, data, and DOM updates.

- [ ] Add click handlers to the timeframe buttons.
- [ ] Update current and previous hours for every card when a timeframe changes.
- [ ] Change the previous-period label correctly:
  - [ ] Daily: “Yesterday”
  - [ ] Weekly: “Last Week”
  - [ ] Monthly: “Last Month”
- [ ] Update the active button style and consider `aria-pressed` for the selected control.

**Learning focus:** Each click should follow a simple flow: determine selected timeframe, read matching data, then update the UI.

**Done when:** All three views work for every card, and the active state always matches the visible data.

## 12. Quality assurance and reflection

**Goal:** Build practical testing habits.

- [ ] Test the controls with mouse, keyboard, and browser DevTools responsive mode.
- [ ] Inspect hover and focus states.
- [ ] Compare desktop and mobile against the reference images.
- [ ] Check headings, button labels, contrast, and image alternatives.
- [ ] Write down three things you learned about Sass, responsive layout, or JavaScript.

**Done when:** The dashboard meets all challenge requirements and you have notes for your next project.

## Suggested milestone order

Complete tickets 1–9 with static content first, then tackle JSON and interactivity. Keeping layout and data work separate will make debugging much less confusing while you are learning both Sass and JavaScript.
