#trendGauge
A plugin that draws a guage with an additional triangle which stands for an average value.

Copyright (C) 2014, Tamir Feldman <tamir@budsoft.co.il>

##Prerequisite

Before using this plugin, please make sure that: 

* jQuery is loaded.
* The style folder with the images is downloaded to your project.

##Usage

Include  trendGauge.js in your application.     


```html
<script type="text/javascript" src="script/trendGauge.js"></script>
```

Create an element in the DOM where you want the chart to appear, and give the `data-average` and `data-percent` any value between 0 to 100. Values will be normalize to the closest multiples of 10 (10, 20, 30...) and will render accordingly.


    <div class="example" data-percent="45" data-average="82">
        <!--This is where the plugin will render the chart-->
    </div>
        



                             



When the document is ready, just use the plugin on the element you have created.             

```js
$(function() {
    $(".example").trendGauge();
});
```      

License
----

Released under the terms of MIT License:

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.