$(function(){
    curPosition = 0;
    function consoleBegin(){
        return '<span class="consoleBegin">$</span> ';
    }

    function log(msg, el){
        timeout = setTimeout(function() {
            $(el).html(msg.substr(0, curPosition));
            $(el).html($(el).text().replace('$', consoleBegin()));
            curPosition = curPosition + 1;
            if(curPosition <= msg.length){
                log(msg, el);
            }
        }, 500);
    }

    function startTyping(msg, element){
        timeout = setTimeout(log(msg, element), 2000);
    }

    var boxesStr = [
        '$ test',
    ];

    $("body").attrchange({
        trackValues: true,
        callback: function(evnt) {
            if(evnt.attributeName == "class") {
                if(evnt.newValue.indexOf('impress-on-step-9')){
                    startTyping('test', '.terminal-content');
                }
            }
        }
    });
    startTyping(boxesStr[0], '.terminal-content');

});
