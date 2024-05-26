---
class: JD.Area
banner: "![[home.jpeg]]"
banner_icon: 📇
banner_x: 0.5
banner_y: 0.44
area: 00-09 System
---

# 00-09 System

```dataviewjs
dv.list(
  dv.pages('"' + dv.current().file.folder + '"')
   .where(c => c.class == "JD.Category")
   .where(c => c.file.name != "Johnny Decimal Category")
   .file.link
)
```
