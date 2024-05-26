---
class: JD.Area
id: 30
created: 2024-05-09
modified: 2024-05-09
banner: "![[home.jpeg]]"
banner_icon: 📇
banner_x: 0.5
banner_y: 0.44
---

# 30-39 Entertainment

```dataviewjs
dv.list(
  dv.pages('"' + dv.current().file.folder + '"')
   .where(c => c.class == "JD.Category")
   .file.link
)
```
