# Dashboard Design Plan

## Component Hierarchy

```text
Dashboard
├── Profile Card
│   ├── Image and Header
│   └── Selection Menu
└── Activity Card Grid
    └── Activity Card
        ├── Header
        └── Summary
```

## Layout Tools

| Component | Layout tool |
| --- | --- |
| Overall Layout | Grid |
| Activity Card Grid | Grid |
| Profile Card | Flexbox |
| Selection Menu | Flexbox |
| Activity Card | Flexbox |
| Activity Card Hour Summary | Flexbox |

## Responsive Layout

| Area | Mobile | Desktop |
| --- | --- | --- |
| Overall layout | One column | 2 × 4 grid |
| Profile card: image and header | Horizontally laid out | Vertically laid out |
| Profile card: selection menu | Horizontal | Vertical |
| Activity cards | Condensed | Standard card layout |
| Activity card: hour summary | Horizontally oriented | Vertically oriented |
