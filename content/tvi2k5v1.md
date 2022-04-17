---
title: Ramda
date: 2022-04-17
tags: javascript
---

Ramda is a [Javascript](br1fz3j3) library that emphasizes on writing pure [Functional programming](g0b4j0ek).\
It takes a moment to understand the power and beauty of using it, especially that its patterns are different than usual.
However, the learning curve pays off when complex logic is needed.


Here's a simple example:
```javascript
const droppableId = "hello-123"
const result = R.pipe(
  R.split("-"),
  R.last,
  parseInt
)(droppableId);
console.log(result) // 123
```

The `pipe` is what I use most as it allows the creation of complex building blocks.
