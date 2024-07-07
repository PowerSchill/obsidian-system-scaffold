---
class: Journal
date: <% tp.file.title %>
tags: 
aliases:
---
# <% tp.date.now("dddd, MMM DD, YYYY", 0, tp.file.title, "YYYY-MM-DD") %>

---

> [!Info]+
>>[!example]- Dates
>>Eternal Week:: [[Week <% tp.date.now("ww", 0, tp.file.title, "YYYY-MM-DD") %>]]
>>Month:: [[<% tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-MM-DD") %>]]
>>Eternal Month:: [[<% tp.date.now("MMMM", 0, tp.file.title, "YYYY-MM-DD") %>]]
>>Eternal Quarter:: [[Quarter <% tp.date.now("Q", 0, tp.file.title, "YYYY-MM-DD") %>]]
>>Quarter:: [[<% tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "YYYY-MM-DD") %>]]
>>Weekday:: [[<% tp.date.now("dddd", 0, tp.file.title, "YYYY-MM-DD") %>]]
>>Day:: [[<% tp.date.now("MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>]]
>>Yesterday:: [[<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>]]
>>Tomorrow:: [[<% tp.date.now("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>]]
>
>>[!example]- Weather
>><!--weather-->

## On This Day

```dataview
LIST
FROM "00-09 System/02 Journal/02.01 Daily"
WHERE dateformat(file.day, "MM-dd") = dateformat(this.file.day, "MM-dd")
```

<% tp.user.daily_quote() %>

## Daily Plan

<!--calendar-->

<!--tasks-->

What three tasks do I want to accomplish today?

What is my top priority task for today?

## Daily Log



## Notes

>[!EXAMPLE]+ Notes Created Today
>
>```dataview
>TABLE file.ctime AS Created, file.mtime as Modified, tags as Tags, class as Class, status as Status
>FROM ""
>	AND !"00-09 System/02 Journal"
>	AND !"90-99 Metadata"
>WHERE contains(dateformat(file.ctime, "YYYY-MM-dd"), dateformat(this.file.day, "YYYY-MM-dd"))
>```
