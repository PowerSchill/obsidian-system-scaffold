---
class: JD.Area
created: 2024-05-07
modified: 2024-05-19
Area: 
banner: "![[home.jpeg]]"
banner_icon: 📇
banner_x: 0.5
banner_y: 0.44
---

# 50-59 Personal

```dataviewjs
dv.list(
  dv.pages('"' + dv.current().file.folder + '"')
   .where(c => c.class == "JD.Category")
   .file.link
)
```
