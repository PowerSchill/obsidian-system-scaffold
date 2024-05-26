---
limit: 100
mapWithTag: false
icon: user
tagNames: 
filesPaths: 
bookmarksGroups: 
excludes: 
extends: 
savedViews:
  - name: All
    children: []
    sorters: []
    filters:
      - id: Person____file
        name: file
        query: ""
        customFilter: return !value.includes('Template')
      - id: Person____Addresses
        name: Addresses
        query: ""
        customFilter: ""
      - id: Person____PhoneNumbers
        name: PhoneNumbers
        query: ""
        customFilter: ""
      - id: Person____EmailAddresses
        name: EmailAddresses
        query: ""
        customFilter: ""
      - id: Person____Spouse
        name: Spouse
        query: ""
        customFilter: ""
      - id: Person____Dates
        name: Dates
        query: ""
        customFilter: ""
    columns:
      - id: Person____file
        name: file
        hidden: false
        position: 0
      - id: Person____Addresses
        name: Addresses
        hidden: false
        position: 1
      - id: Person____PhoneNumbers
        name: PhoneNumbers
        hidden: false
        position: 2
      - id: Person____EmailAddresses
        name: EmailAddresses
        hidden: false
        position: 3
      - id: Person____Spouse
        name: Spouse
        hidden: false
        position: 4
      - id: Person____Dates
        name: Dates
        hidden: false
        position: 5
favoriteView: 
version: "2.38"
fields:
  - name: addresses
    type: ObjectList
    options: {}
    path: ""
    id: HeMhXV
  - name: address_type
    type: Select
    options:
      valuesList:
        "1": Home
        "2": Work
      sourceType: ValuesList
      valuesListNotePath: ""
      valuesFromDVQuery: ""
    path: HeMhXV
    id: n9NGX4
  - name: street_address
    type: Input
    options: {}
    path: HeMhXV
    id: rlB1Vn
  - name: city
    type: Input
    options: {}
    path: HeMhXV
    id: kTbi52
  - name: state
    type: Input
    options: {}
    path: HeMhXV
    id: 3YS7Ak
  - name: zip_code
    type: Input
    options: {}
    path: HeMhXV
    id: LpQhqD
  - name: phone_numbers
    type: ObjectList
    options: {}
    path: ""
    id: vwwHmg
  - name: phone_type
    type: Select
    options:
      valuesList:
        "1": Home
        "2": Mobile
        "3": Work
      sourceType: ValuesList
      valuesListNotePath: ""
      valuesFromDVQuery: ""
    path: vwwHmg
    id: VGbQax
  - name: phone_number
    type: Input
    options: {}
    path: vwwHmg
    id: 4EUJp8
  - name: email_addresses
    type: ObjectList
    options: {}
    path: ""
    id: 1mY1x4
  - name: email_address_type
    type: Select
    options:
      valuesList:
        "1": Home
        "2": Work
      sourceType: ValuesList
      valuesListNotePath: ""
      valuesFromDVQuery: ""
    path: 1mY1x4
    id: ezzuSc
  - name: email_address
    type: Input
    options: {}
    path: 1mY1x4
    id: y2ulLN
  - name: spouse
    type: File
    options: {}
    path: ""
    id: 45HfcC
  - name: dates
    type: ObjectList
    options: {}
    path: ""
    id: nlLFd6
  - name: date_type
    type: Select
    options:
      valuesList:
        "1": Birthday
        "2": Anniversary
      sourceType: ValuesList
      valuesListNotePath: ""
      valuesFromDVQuery: ""
    path: nlLFd6
    id: nf72Wp
  - name: date
    type: Date
    options:
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: true
    path: nlLFd6
    id: ZSNwLo
fieldsOrder:
  - nlLFd6
  - ZSNwLo
  - nf72Wp
  - 45HfcC
  - 1mY1x4
  - y2ulLN
  - ezzuSc
  - vwwHmg
  - 4EUJp8
  - VGbQax
  - HeMhXV
  - LpQhqD
  - 3YS7Ak
  - kTbi52
  - rlB1Vn
  - n9NGX4
---
