---
class: JD.Category
created: 2024-05-07
modified: 2024-05-07
Area: 00-09 System
banner: "![[index.jpg]]"
banner_icon: 📇
banner_x: 0.5
banner_y: 0.44
id: "05"
description: "Templates and other data classification standards are stored. "
---

# 05 Templates

```dataview
TABLE WITHOUT ID file.link as IDs, locations as "Storage Locations"
WHERE regexreplace(id, "\.\d+", "") = this.id
  AND class != "JD.Category"
sort file.link
```
