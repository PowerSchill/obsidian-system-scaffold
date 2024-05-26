---
class: Journal
date: <% moment(tp.file.title, "YYYY-MM").endOf("month").format("YYYY-MM-DD") %>
---

# <% tp.date.now("MMMM YYYY", 0, tp.file.title, "YYYY-MM") %>

```chart
type: polarArea
labels:
  [
    Career,
    Money,
    Health,
    Relationships,
    Personal Growth,
    Fun & Recreation,
    Physical Environment,
    Spirituality,
  ]
series:
  - title:
 data: [5, 5, 5, 5, 5, 5, 5, 5]
tension: 0.2
width: 80%
labelColors: true
fill: true
beginAtZero: true
rMax: 10
bestFit: false
bestFitTitle: undefined
bestFitNumber: 0
legendPosition: right
```

> [!Info]+
>Month::  [[<% tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-MM") %>]]
>Eternal Month::  [[<% tp.date.now("MMMM", 0, tp.file.title, "YYYY-MM") %>]]
>Eternal Quarter:: [[<% tp.date.now("[Quarter ]Q", 0, tp.file.title, "YYYY-MM") %>]]
>Quarter:: [[<% tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "YYYY-MM") %>]]
>Last Month:: [[<% tp.date.now("YYYY-MM", "P-1M", tp.file.title, "YYYY-MM") %>]]
>Next Month:: [[<% tp.date.now("YYYY-MM", "P+1M", tp.file.title, "YYYY-MM") %>]]

## Major Events

```dataviewjs
for (let group of dv
  .pages('"00-09 System/02 Journal/02.01 Daily"')
  .where((p) => moment(p.file.name).format("YYYY-MM") == dv.current().file.name)
  .where((p) => p.aliases != "")
  .where((p) => p.aliases != null)
  .groupBy((p) => moment(p.file.name).format("YYYY-MM"))) {
  dv.table(
    ["Date", "Event"],
    group.rows.map((g) => [g.file.link, g.aliases])
  );
}
```

## Highlights

```dataviewjs
for (let group of dv
  .pages('"00-09 System/02 Journal/02.01 Daily"')
  .where((p) => moment(p.file.name).format("YYYY-MM") == dv.current().file.name)
  .where((p) => p.log-highlight != "")
  .where((p) => p.log-highlight != null)
  .groupBy((p) => moment(p.file.name).format("YYYY-MM"))) {
  dv.table(
    ["Date", "Event"],
    group.rows.map((g) => [g.file.link, g.log-highlight])
  );
}
```

## Review

### The Big Question

How am I doing on quarterly plan action items?

%% Look at the quarterly planning action items list and check in on them. Are you making progress? Is anything stalled? What can you do in the next 30 days to move it forward?
 %%

### The Prompts

- What was the most delightful moment last month?
- What was the big win last month?
- What went wrong last month, and what lessons did I learn?
- What was the best use of my time last month?
- What was the worst use of my time last month?
- What am I looking forward to?
- Anything else?

### Roles Review

Roles List - Projects & Habits

### Getting Tactical

Look at all events, trips, birthdays, and engagements heading my way and plan for them.

Look at all of my currently active projects to ensure nothing is stuck.

- Review and update the calendar.
- Audit and update tasks.
