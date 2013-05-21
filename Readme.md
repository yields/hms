# hms

  get hours, minutes and seconds from milliseconds.

## Installation

    $ component install yields/hms

## Example

```js
var ret = hms(2400000);
ret;
// > { h: 0, m: 40, s: 0 }
ret[0];
// > 0
ret[1];
// > 40
ret[2];
// > 0
ret.join(':');
// > 0:40:0
ret.map(function(n){ return 10 > n ? '0' + n : n; }).join(':');
// > 00:40:00
```

## License

  MIT
