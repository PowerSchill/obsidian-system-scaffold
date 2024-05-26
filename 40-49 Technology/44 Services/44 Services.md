---
class: JD.Category
created: 2024-05-06
modified: 2024-05-26
banner: "![[home.jpeg]]"
banner_icon: 📇
banner_x: 0.5
banner_y: 0.44
id: 
description: "This category stores resources related to services such as cloud service providers, online systems, etc. "
---

# 44 Services

```dataviewjs
dv.table(["File", "Storage Location"],
  dv.pages('"' + dv.current().file.folder + '"')
   .where(c => c.class == "JD.ID")
   .map(c => [c.file.link, c.storageLocations]))
```
