## hw4：What is this?

請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

```
const obj = {
  value: 1,
  hello: function() {
    console.log(this.value)
  },
  inner: {
    value: 2,
    hello: function() {
      console.log(this.value)
    }
  }
}
  
const obj2 = obj.inner 
const hello = obj.inner.hello 
obj.inner.hello() // ?? 2
obj2.hello() // ?? 2
hello() // ?? not defined
```
obj.inner.hello() // ?? 2 
- this 指向 obj 物件裡的物件  inner 所以值為 2
obj2.hello() // ?? 2
- this 也是指向 obj 裡的 inner 所以值為 2
hello() // ?? not defined
- globe 中找不到 hello 這個函式
