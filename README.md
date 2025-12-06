Toasty!
===========

Show Dan Forden's Toasty from Mortal Kombat III as an Easter Egg for your website.

### Usage

```html
<button id="toasty-button" style="padding:10px;">Show toasty</button>
<script src="toasty.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        toasty()
        document.getElementById('toasty-button').addEventListener('click', () => toasty('pop'))
    })
</script>
```

### Demo
[https://thefrosty.github.io/toasty/](https://thefrosty.github.io/toasty/)
