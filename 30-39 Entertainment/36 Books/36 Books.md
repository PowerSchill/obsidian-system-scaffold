---
class: JD.Category
created: 2024-05-12
modified: 2024-05-22
banner: "![[home.jpeg]]"
banner_icon: 📇
banner_x: 0.5
banner_y: 0.44
id: 
---

# 36 Books

```dataviewjs
dv.table(["File", "Storage Location"],
  dv.pages('"' + dv.current().file.folder + '"')
   .where(c => c.class == "JD.ID")
   .sort(c => c.id)
   .map(c => [c.file.link, c.storageLocations]))
```
