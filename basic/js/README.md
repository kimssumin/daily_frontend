### Night mode & Day mode

##### - 3.html 참고
##### https://kimssumin.github.io/daily_frontend/basic/js/html&internet.html

---

> <b>create button (type, value, onclick)</b>

```javascript
<input
type="button"
value="night"
onclick="document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = 'white';"
>
```

> <b>a tag colorize</b>

```javascript
var alist = document.querySelectorAll('a');
var i = 0;
while(i < alist.length){
    alist[i].style.color = 'powderblue';
    i = i+1;
}
```

> <b>using while, if, var</b>

```javascript
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

> <b>function -> nightDayHandler(this); 로 호출</b>

- Function : Basic - Parameter & Argument - Return
- function.함수이름(){사용하고자 하는 코드}

```javascript
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

> <b>객체 : 이름이 있는 정리정돈 상자</b>

- 쓰기와 읽기 : operator</b>

```javascript
var coworkers = {
    "programmer" : "egoing", "designer": "leezche"
};
document.write("programmer: " + coworkers.programmer);
<!--데이터를 넣는 또다른 방법들-->
coworkers.bookkeeper = "dru";
coworkers["data scientists"] = "taeho";
```

- 반복문 : key, value

```javascript
for (var key in coworkers){
    document.write(coworkers[key] + '<br>');
}
```

- Property & Method : 객체에는 함수를 담을 수 있다

```javascript
coworkers.showAll = function(){
    for (var key in this){
        if(showAll은 제외한다)
        document.write(this[key] + '<br>');
    }
}
coworkers.showAll();
<!--function showAll(){ } 와 동일-->
```
