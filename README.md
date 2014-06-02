#Accordion
================================
###Basic Structure

```sh
<ul>
  <li>
    <div class='topWrap'>
    </div>
    <div class='details'></div>
  </li>
</ul>  
```
###Basic function call
```sh
<script type="text/javascript">
  $(document).ready(function(){
    $("ul").accordion();
  });
</script>
```

###Customize function call
```sh
<script type="text/javascript">
  $(document).ready(function(){
    $("ul").accordion({
      tabClick: ".topWrap", // Class or ID on which you want to open the content
      tabContent: ".details", // Class or ID which tells the content to show on click
      accordAnimation: "2000",  // animation time
      bodyAnimation: "2000", // body slide animation time
      spaceTop: "0" // offset to maintain from the top
    });
  });
</script>
```
