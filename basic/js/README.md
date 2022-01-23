### Night mode & Day mode

---

> create button (type, value, onclick)

```json
<input
type="button"
value="night"
onclick="document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = 'white';"
>
```

> a tag colorize

```json
var alist = document.querySelectorAll('a');
var i = 0;
while(i < alist.length){
    alist[i].style.color = 'powderblue';
    i = i+1;
}
```

> using while, if, var

```json
<input type = "button" value = "night" onclick = "
        var target = document.querySelector('body');
        if(this.value === 'night'){
            target.style.backgroundColor = 'black';
            target.style.color = 'white';
            this.value = 'day';
            var alist = document.querySelectorAll('a');
            var i = 0;
            while(i < alist.length){
                alist[i].style.color = 'powderblue';
                i = i+1;
            }
        } else {
            target.style.backgroundColor = 'white';
            target.style.color = 'black';
            this.value = 'night';
            var alist = document.querySelectorAll('a');
            var i = 0;
            while(i < alist.length){
                alist[i].style.color = 'blue';
                i = i+1;
        }
        }
    ">
```

> function -> nightDayHandler(this); 로 호출

- Function : Basic - Parameter & Argument - Return
- function.함수이름(){사용하고자 하는 코드}

```json
<script>
        function nightDayHandler(self){
            var target = document.querySelector('body');
            if(self.value === 'night'){
                target.style.backgroundColor = 'black';
                target.style.color = 'white';
                self.value = 'day';
                var alist = document.querySelectorAll('a');
                var i = 0;
                while(i < alist.length){
                    alist[i].style.color = 'powderblue';
                    i = i+1;
                }
            } else {
                target.style.backgroundColor = 'white';
                target.style.color = 'black';
                self.value = 'night';
                var alist = document.querySelectorAll('a');
                var i = 0;
                while(i < alist.length){
                    alist[i].style.color = 'blue';
                    i = i+1;
                }
            }
        }
</script>
```
