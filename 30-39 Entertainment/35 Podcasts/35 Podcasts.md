---
class: JD.Category
created: 2024-05-09
modified: 2024-05-09
banner: "![[index.jpg]]"
banner_icon: 📇
banner_x: 0.5
banner_y: 0.44
id: 35
Category:
---

# 35 Podcasts

```dataviewjs
dv.table(["File", "Storage Location"],
  dv.pages('"' + dv.current().file.folder + '"')
   .where(c => c.class == "JD.ID")
   .map(c => [c.file.link, c.storageLocations]))
```
