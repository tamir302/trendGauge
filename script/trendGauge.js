/**
 * Created by Tamir on 06/04/14.
 */

var _trendGauge = (function(me) {
    me.init = function(element) {
        me.element = element;
        me.originalVal = element.data("percent");
        me.averageVal = element.data("average");

        /*normalizing the values*/
        me.arrowVal = Math.round(me.originalVal / 10) * 10;
        me.triangleVal = Math.round(me.averageVal / 10) * 10;

        /*template to be rendered*/
        me.template = '<div class="trendGauge">';
        me.template +=      '<div class="scale">';
        me.template +=          '<div class="triangle"><div class="inner"></div></div>';
        me.template +=          '<div class="bottomArrow" data-arrow></div>';
        me.template +=          '<span class="leftValue">0</span>';
        me.template +=          '<span class="rightValue">100</span>';
        me.template +=          '<span class="value"></span>';
        me.template +=      '</div>';
        me.template += '</div>';
        me.render();
    };

    me.render = function() {
        /*change data values according to normalization*/
        me.element.attr("data-percent", me.arrowVal);
        me.element.attr("data-average", me.triangleVal);

        /*rendering the container and arrow*/
        var container = $(me.template);
        me.element.html(container);

        /*write the original values inside the chart*/
        $('span.value').html(me.originalVal);
        $("div.inner").html(me.averageVal);

        /*delay the initial animation*/
        setTimeout(function(){
            $(".trendGauge").each(function(){
                $(this).parent().addClass("active");
            })
        }, 300);
    };

    return me;
}(_trendGauge || {}));

//trendGauge Plugin Function
$.fn.trendGauge = function() {
    this.each(function() {
        _trendGauge.init($(this));
    });

    return this;
};