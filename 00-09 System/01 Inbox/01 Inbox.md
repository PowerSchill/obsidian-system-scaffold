---
class: JD.Category
created: 2024-05-08
modified: 2024-05-08
banner: "![[index.jpg]]"
banner_icon: 📇
banner_x: 0.5
banner_y: 0.44
id: "01"
area: 00-09 System
description: Provides an initial location for information that hasn't been categorized yet.
---

# 01 Inbox

```dataview
TABLE WITHOUT ID file.link as IDs
WHERE regexreplace(id, "\.\d+", "") = this.id
  AND class != "JD.Category"
sort file.link
```
