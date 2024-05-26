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
>>Week:: [[{{date:YYYY}}-W{{date:ww}}]]  
>>Eternal Week:: [[Week {{date:ww}}]]  
>>Month:: [[{{date:YYYY-MM}}]]  
>>Eternal Month:: [[{{date:MMMM}}]]  
>>Eternal Quarter:: [[Quarter {{date:Q}}]]  
>>Quarter:: [[{{date:YYYY}}-Q{{date:Q}}]]  
>>Weekday:: [[{{date:dddd}}]]  
>>Day:: [[{{date:MM-DD}}]]  
>>Yesterday:: [[{{yesterday}}]]  
>>Tomorrow:: [[{{tomorrow}}]]
>
>>[!example]- Weather
>><!--weather-->



## On This Day

```dataview
LIST
FROM "00-09 System/02 Journal/02.01 Daily"
WHERE dateformat(file.day, "MM-dd") = dateformat(this.file.day, "MM-dd")
```

## Daily Plan

<!--calendar-->

What three tasks do I want to accomplish today?

What is my top priority task for today?

## Daily Log



## Notes

>[!EXAMPLE]+ Notes Created Today
>```dataview
>TABLE file.ctime AS Created, file.mtime as Modified, tags as Tags, class as Class, status as Status
>FROM ""
>	AND !"00-09 System/02 Journal"
>	AND !"90-99 Metadata"
>WHERE contains(dateformat(file.ctime, "YYYY-MM-dd"), dateformat(this.file.day, "YYYY-MM-dd"))
>```
