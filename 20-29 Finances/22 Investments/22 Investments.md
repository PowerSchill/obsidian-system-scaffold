---
class: JD.Category
created: 2024-05-05
modified: 2024-05-05
Area: 20-29 Finances
banner: "![[index.jpg]]"
banner_icon: 📇
banner_x: 0.5
banner_y: 0.44
Category:
cssclasses: [dashboard]
id: "22"
---

# 22 Investments

```dataview
TABLE WITHOUT ID file.link as IDs
WHERE regexreplace(id, "\.\d+", "") = this.id
  AND class != "JD.Category"
  AND area != null
  AND category != null
sort file.link
```
