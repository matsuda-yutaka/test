// 問1：半径5cmの円、半径7cmの円、半径10cmの円の面積をそれぞれ求めてください。

// 引数（ひきすう）(hankei,π=3.14)に対して(hankei*hankei*π)をした結果を表示させる
function menseki(hankei,π=3.14){
  //  var π=3.14
  return(hankei*hankei*π);
}
document.write(menseki(5)+"cm2"+"<br>");
document.write(menseki(7)+"cm2"+"<br>");
document.write(menseki(10)+"cm2"+"<br>");
document.write(menseki(10,3)+"cm2"+"<br>");

// 改行
document.write("<br>");

// 問2：Aグループの合計金額、Bグループの合計金額、Cグループの合計金額

// 引数(adult,child)に対してそれぞれ料金を掛け、足し算をした結果を表示させる
function fee(adult,child){
  return (adult*500)+(child*200) ;
} 
document.write(fee(2,4)+"円です。"+"<br>") ;
document.write(fee(1,5)+"円です。"+"<br>") ;
document.write(fee(3,7)+"円です。"+"<br>") ;



