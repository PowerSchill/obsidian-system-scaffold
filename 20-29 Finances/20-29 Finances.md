---
class: JD.Area
created: 2024-05-07
modified: 2024-05-10
banner: "![[home.jpeg]]"
banner_icon: 📇
banner_x: 0.5
banner_y: 0.44
---

# 20-29 Finances

```dataviewjs
dv.list(
  dv.pages('"' + dv.current().file.folder + '"')
   .where(c => c.class == "JD.Category")
   .file.link
)
```
