// 問1：★を５つ表示する
// 変数no1を0〜4回目まで1つずつ増やして表示させる
for(var no1 =0; no1< 5; no1++){
    document.write("★");
}

// 改行
document.write("<br>");
document.write("<br>");

// 問2：★3つを、2行表示する
// ★を3つ表示した後改行タグを表示する、のを2回（行）繰り返す
for(var no1 =0; no1< 2; no1++){
    for(var no2 =0; no2<3; no2++){
        document.write("★");
    }
    document.write("<br>");
}

// 改行
document.write("<br>");

// 問3：☆5つを、2行表示する
// ★を5つ表示した後改行タグを表示する、のを2回（行）繰り返す
for(var no1 =0; no1< 2; no1++){
    for(var no2 =0; no2<5; no2++){
        document.write("☆");
    }
    document.write("<br>");
}

// 改行
document.write("<br>");

// 問4：★5つを、4行表示する
// ★を5つ表示した後改行タグを表示する、のを4回（行）繰り返す
for(var no1 =0; no1< 4; no1++){
    for(var no2 =0; no2<5; no2++){
        document.write("★");
    }
    document.write("<br>");
}

// 改行
document.write("<br>");

// 問5：★3つを、4行表示する
// ★を3つ表示した後改行タグを表示する、のを4回（行）繰り返す
for(var no1 =0; no1< 4; no1++){
    for(var no2 =0; no2<3; no2++){
        document.write("★");
    }
    document.write("<br>");
}

// 改行
document.write("<br>");

// 問6：★☆★を3行表示する
// もしno2が偶数なら★と表示し、そうでない場合は☆と表示する、のを3つまで表示し3回（行）繰り返す
for(var no1 =0; no1< 3; no1++){
    for(var no2 =0; no2<3; no2++){
        if(no2 % 2 ==0){
            document.write("★");
        } else {
            document.write("☆");
        }
    } 
    document.write("<br>");
}

// 改行
document.write("<br>");

// 問7：★☆★☆★を4行表示する
// もしno2が偶数なら★と表示し、そうでない場合は☆と表示する、のを5つまで表示し4回（行）繰り返す
for(var no1 =0; no1< 4; no1++){
    for(var no2 =0; no2<5; no2++){
        if(no2 % 2 ==0){
            document.write("★");
        } else {
            
            document.write("☆");
        }
    } 
    document.write("<br>");
}

// 改行
document.write("<br>");

// 問8：★を改行ごとに1つずつ増やし、5つまで表示する
// no1+1ずつ★を5つまで表示し、5回（行）繰り返す
for(var no1 =0; no1< 5; no1++){
    for(var no2 =0; no2<no1+1; no2++){
        document.write("★"); 
    }
    document.write("<br>");
}
        
