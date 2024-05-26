---
limit: 100
mapWithTag: false
icon: book
tagNames: 
excludes: 
extends: 
version: "2.28"
fields:
  - id: lVL3gW
    name: rating
    options:
      valuesList:
        "1": ⭐️⭐️⭐️⭐️⭐️
        "2": ⭐️⭐️⭐️⭐️
        "3": ⭐️⭐️⭐️
        "4": ⭐️⭐️
        "5": ⭐️
      sourceType: ValuesList
      valuesListNotePath: ""
      valuesFromDVQuery: ""
    type: Select
    path: ""
  - id: AwU78c
    name: recommendations
    options:
      valuesList:
        "1": 🔍🔍🔍🔍🔍
        "2": 🔍🔍🔍🔍
        "3": 🔍🔍🔍
        "4": 🔍🔍
        "5": 🔍
      sourceType: ValuesList
      valuesListNotePath: ""
      valuesFromDVQuery: ""
    type: Select
    path: ""
  - id: kGEhav
    name: priority
    options:
      groupColors:
        - "6"
      groupLabels: []
      canvasPath: Library.canvas
    type: CanvasGroup
    path: ""
  - id: PRucGM
    name: status
    options:
      groupColors:
        - "4"
        - "3"
        - "2"
      groupLabels: []
      canvasPath: Library.canvas
    type: CanvasGroup
    path: ""
  - name: shelf
    type: Select
    options:
      sourceType: ValuesList
      valuesList:
        "1": toread
        "2": reading
        "3": read
        "4": stopped
    path: ""
    id: c837n3
  - name: series
    type: Input
    options: {}
    path: ""
    id: 7gBUpa
  - name: seriesNumber
    type: Number
    options:
      min: 1
    path: ""
    id: Y2xkXz
  - name: dateFinished
    type: Date
    options:
      dateShiftInterval: 1 day
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: false
      linkPath: ""
    path: ""
    id: gJ2mA6
  - name: title
    type: Input
    options: {}
    path: ""
    id: Dae4yp
  - name: author
    type: Multi
    options:
      sourceType: ValuesList
      valuesList: {}
    path: ""
    id: XiiiGb
  - name: category
    type: Input
    options: {}
    path: ""
    id: Mw0npO
  - name: publisher
    type: Input
    options: {}
    path: ""
    id: 1EnvPw
  - name: publishDate
    type: Date
    options:
      dateShiftInterval: 1 day
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: false
      linkPath: ""
    path: ""
    id: VUxgVq
  - name: pages
    type: Number
    options:
      min: 0
    path: ""
    id: dqVzAa
  - name: isbn
    type: Input
    options: {}
    path: ""
    id: Lx302d
  - name: isbn13
    type: Input
    options: {}
    path: ""
    id: ksHOFN
  - name: cover
    type: Input
    options: {}
    path: ""
    id: ApMxUu
  - name: dateStarted
    type: Date
    options:
      dateShiftInterval: 1 day
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: false
      linkPath: ""
    path: ""
    id: EkbSV7
filesPaths: 
bookmarksGroups: 
savedViews: []
favoriteView: 
fieldsOrder:
  - Dae4yp
  - XiiiGb
  - Mw0npO
  - 1EnvPw
  - VUxgVq
  - dqVzAa
  - Lx302d
  - ksHOFN
  - ApMxUu
  - c837n3
  - PRucGM
  - kGEhav
  - 7gBUpa
  - Y2xkXz
  - lVL3gW
  - AwU78c
  - EkbSV7
  - gJ2mA6
---

rating:: {"type":"Select","options":{"valuesList":{"1":"⭐️⭐️⭐️⭐️⭐️","2":"⭐️⭐️⭐️⭐️","3":"⭐️⭐️⭐️","4":"⭐️⭐️","5":"⭐️"},"sourceType":"ValuesList","valuesListNotePath":"","valuesFromDVQuery":""}}
Recommendations:: {"type":"Select","options":{"valuesList":{"1":"🔍🔍🔍🔍🔍","2":"🔍🔍🔍🔍","3":"🔍🔍🔍","4":"🔍🔍","5":"🔍"},"sourceType":"ValuesList","valuesListNotePath":"","valuesFromDVQuery":""}}
Complete:: {"type":"Boolean","options":{}}
Priority:: {"type":"CanvasGroup","options":{"groupColors":["6"],"groupLabels":[],"canvasPath":"Library.canvas"}}
Status:: {"type":"CanvasGroup","options":{"groupColors":["4","3","2"],"groupLabels":[],"canvasPath":"Library.canvas"}}
