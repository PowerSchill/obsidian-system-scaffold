---
class: JD.Category
created: 2024-06-08
modified: 2024-06-08
banner: "![[index.jpg]]"
banner_icon: 📇
banner_x: 0.5
banner_y: 0.44
id: 
description: Music
---

# 38 Music

```dataviewjs
dv.table(["File", "Storage Location"],
  dv.pages('"' + dv.current().file.folder + '"')
   .where(c => c.class == "JD.ID")
   .map(c => [c.file.link, c.storageLocations]))
```
