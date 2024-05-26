---
tags:
class: Journal
periodicNotes:
  year: <% tp.date.now("YYYY", 6, tp.file.title, "gggg-[W]ww") %>
  week: <% tp.date.now("ww", 6, tp.file.title, "gggg-[W]ww") %>
---
# 📅 Weekly Reflection for [[<% tp.date.now("gggg-[W]ww", 0, tp.file.title, "gggg-[W]ww") %>]]

> [!Info]+
>>[!example]- Dates
>>Week:: [[{{date:YYYY}}-W{{date:ww}}]]
>>Eternal Week:: [[Week {{date:ww}}]]
>>Month:: [[{{date:YYYY-MM}}]]
>>Eternal Month:: [[{{date:MMMM}}]]
>>Eternal Quarter:: [[Quarter {{date:Q}}]]
>>Quarter:: [[{{date:YYYY}}-Q{{date:Q}}]]
>>Last Week:: [[<% tp.date.now("gggg-[W]ww", -7, tp.file.title, "gggg-[W]ww") %>]]
>>Next Week:: [[<% tp.date.now("gggg-[W]ww", +7, tp.file.title, "gggg-[W]ww") %>]]

```dataviewjs
for (let group of dv
  .pages('"00-09 System/02 Journal/02.01 Daily"')
  .where((p) => moment(p.file.name).format("YYYY-[W]WW") == dv.current().file.name)
  .where((p) => p.aliases != "")
  .where((p) => p.aliases != null)
  .groupBy((p) => moment(p.file.name).format("YYYY-[W]WW"))) {
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
  .where((p) => moment(p.file.name).format("YYYY-[W]WW") == dv.current().file.name)
  .where((p) => p.highlight != "")
  .where((p) => p.highlight != null)
  .groupBy((p) => moment(p.file.name).format("YYYY-[W]WW"))) {
  dv.table(
    ["Date", "Event"],
    group.rows.map((g) => [g.file.link, g.highlight])
  );
}
```

## My Weekly Review

- **What Was My Biggest Accomplishment over the past Week?**
- **What Lessons Did I Learn from Things That Didn't Go Right?**
- **What (quotes, Affirmations, etc.) Kept Me Inspired This Week?**
- **Did I Complete Any Projects or Tasks This Week?**
- **Any Pending Tasks?**
- **Did I Stick to My Plan and Stay Focused**
- **What Kind of Progress Did I Make on Big Monthly, Quarterly, or Yearly Goals?**
- **What is the #1 Thing I Need to Accomplish Next Week?**
- **What Can I Do Right now to Make Next Week less Stressful?**
- **What Am I Most Grateful for about This Past Week?**
