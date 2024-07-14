# Docs

## How many characters are in this string?

```js
'supercalifragilisticexpialidocious'.length;
```

- Characters are in a specific order
- Each gets a number, starting at 0

```js
const name = 'Aruna';
```

- You can put like this

A r u n a
0 1 2 3 4 - index of letters i just work like array

```js
console.log('Aruna'[0]);
console.log('Aruna'.indexOf('u'));
console.log('Aruna'.indexOf('q')); // - 1 output [if character not exist it give -ve one]
console.log('Aruna'.indexOf('R')); // - 1 output [if character are case sensitive]
```

This says in the sting Aruna what is the first character

`output: A`

- Does this string contain some other string?

```js
'ALOHA'.includes('HA'); // true
'ALOHA'.includes('LOL'); // false
```

- Does this string start with some other string?

```js
'ALOHA'.startsWith('AL'); // true
'ALOHA'.startsWith('HA'); // false
```

- At what index does this substring begin?

```js
'ALOHA'.indexOf('HA'); // 3  [H start with position at 3]
'ALOHA'.indexOf('LOL'); // -1 not match
```

- Connecting strings together

```js
'ALOHA' + '!';
```

```js
'ALOHA'.toLowerCase();
```
