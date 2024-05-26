---
tags:
class: Journal
---


## Objectives

```dataview
TABLE WITHOUT ID file.link as Objective, status
WHERE class = "OKR"
	AND start_date.year = 2023
	AND end_date.year = 2023
```

## Year in Review
 
>[!EXAMPLE]+ Aliases
>```dataview
>TABLE aliases
>FROM "00-09 System/02 Journal/02.01 Daily"
>WHERE aliases != null
>	AND length(aliases) > 1
>	AND file.day.year = <% tp.date.now("YYYY", 0, tp.file.title, "YYYY") %>
>SORT file.day
>```

>[!EXAMPLE]+ highlights
>```dataview
>TABLE WITHOUT ID "[[<% tp.date.now("YYYY", 0, tp.file.title, "YYYY") %>-" + Month + "]]" AS Month, rows.highlight as Highlights
>FROM "00-09 System/02 Journal/02.01 Daily"
>WHERE date.year = <% tp.date.now("YYYY", 0, tp.file.title, "YYYY") %>
>	AND highlight != null
>SORT Month
>GROUP BY date.month AS Month
>```
>

