---
class: JD.Category
created: 2024-05-11
modified: 2024-05-26
banner: "![[index.jpg]]"
banner_icon: 📇
banner_x: 0.5
banner_y: 0.44
description: "This is where content that is no longer active but still needed is stored. "
id: 09
---

# 09 Archive

```dataviewjs
dv.table(["File", "Storage Location"],
  dv.pages('"' + dv.current().file.folder + '"')
   .where(c => c.class == "JD.ID")
   .map(c => [c.file.link, c.storageLocations]))
```
