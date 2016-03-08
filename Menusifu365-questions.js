



function openMe(){
  ('#questions').click(function(){
    if(('#content').is(':hidden'))
        {
          ('#content').slideDown('slow');  
          (this).text('收起');
        }else{
          ('#d2').slideUp('slow');
          (this).text('展开');  
            }
}
