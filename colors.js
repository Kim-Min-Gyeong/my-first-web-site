var Link = {
    SetLinkColor:function(color)
    {
        $('a').css('color', color); /* jQuery */
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while(i<alist.length)
        // {
            // alist[i].style.color = color;
            // i++;
        // }
    }
}
var Body = {
    SetColor:function(color)
    {
        // document.querySelector('body').style.color=color;
        $('body').css('color', color);
    },
    SetBackgroundColor:function(color)
    {
        // document.querySelector('body').style.background = color;
        $('body').css('backgroundColor', color);
    }   
}
function night_day_handler(self) /* 함수 */ 
{
    var target = document.querySelector('body'); /* target이라는 변수를 생성하여 코드 길이 감소 */
    if(self.value === 'night') /* 'document.querySelector('#night_day')는 자기 자신을 가리키기 때문에 this로 변경 가능 */
    {
        Body.SetBackgroundColor('black'); /*target.style.background='black';*/
        Body.SetColor('white');
        self.value = 'day';
        Link.SetLinkColor('powderblue');
    }
    else
    {
        Body.SetBackgroundColor('white'); /*target.style.background='white';*/
        Body.SetColor('black');
        self.value = 'night';
        Link.SetLinkColor('blue');
    }
}