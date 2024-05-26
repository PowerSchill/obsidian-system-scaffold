---
class: Book
title: "{{title}}"
author: [{{author}}]
category: {{category}}
publisher: {{publisher}}
publishDate: {{publishDate}}
pages: {{totalPage}}
isbn: {{isbn10}}
isbn13: {{isbn13}}
cover: <%=book.coverUrl ? `https://books.google.com/books/publisher/content/images/frontcover/${[...book.coverUrl.split("&")[0].matchAll(/id.?(.*)/g)][0][1]}?fife=w600-h900&source=gbs_api` : ''%>
shelf: toread
created: {{DATE:YYYY-MM-DD HH:mm:ss}}
---

![cover|150]({{coverUrl}})

# {{title}}

## Description

{{description}}

## Notes

>[!cite]+ Links to this Page
>
>```dataview
>LIST FROM ([[#]]) OR outgoing([[#]])
>WHERE file.name != this.file.name
>SORT file.name ASC
>```
