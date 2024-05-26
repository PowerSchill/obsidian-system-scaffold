---
class: JD.Category
created: 2024-05-09
modified: 2024-05-18
banner: "![[home.jpeg]]"
banner_icon: 📇
banner_x: 0.5
banner_y: 0.44
id: 
description: "Location for information that is periodic in nature: journals, scheduled tasks, etc."
---

# 02 Journal

```dataviewjs
dv.table(["File", "Storage Location"],
  dv.pages('"' + dv.current().file.folder + '"')
   .where(c => c.class == "JD.ID")
   .map(c => [c.file.link, c.storageLocations]))
```
