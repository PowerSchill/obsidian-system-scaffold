---
class: JD.Category
id:
banner: "![[home.jpeg]]"
banner_icon: 📇
banner_x: 0.5
banner_y: 0.44
---

# 27 Receipts & Documents

```dataviewjs
dv.table(["File", "Storage Location"],
  dv.pages('"' + dv.current().file.folder + '"')
   .where(c => c.class == "JD.ID")
   .map(c => [c.file.link, c.storageLocations]))
```
