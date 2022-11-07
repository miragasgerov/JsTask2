// Question1 
// 1. 5-dən 26-ya qədər ədədlərin ədədi ortasını tapıb çap edin 
// let sum = 0;
// let overage = 0;
// let count = 0;

// for(i = 5; i<26; i++){
//     sum += i;
//     count++;
//     overage = sum / count;

// }

// console.log("Cemi" + ":" + sum + " " + "ededi ortasi" + " " + overage);

// output --> Cemi:315 ededi ortasi 15

// Question2
// 10 ilə 100 arasındakı ədədlərdən yalnız cüt olanları mətn formatında ekrana çıxarın

// for(i =10; i<100;i++){
//     if(i % 2 === 0){
//         str = i.toString();
//         console.log(str + " " + typeof(str));
//     }
// }

// output --> 10 12 14 16 18 20


// Question3 
// 0-dan 40-a qədər ədədlər içərisindən 10 a bölünən ədədləri ekrana çıxarın

// for(i=0; i<=40;i++){
//     if(i % 10 === 0){
//         console.log(i);
//     }
// }

// output --> 0 10 20 30 40


// Question4
// Hər hansı bir ədəd daxil edin və onun 3-ə bölünən olub olmadığını yoxlayan bir alqorithm yazın

// let myCount = prompt("Add number ..");

// if(myCount % 3 ===0){
//     console.log("Yazilmis eded 3-e bolunur");
// }
// else{
//     console.log("Yazilmis eded 3-e bolunmur");
// }


// Question 5
// 30 ilə 40 arasındakı ədədlərin cəmi ilə hasilinin ədədi ortasını tapın

// let sum =0;
// let multiple = 0;
// for(i=30;i<40;i++){
//     sum += i;
//     multiple *= i;
// }

// console.log(+(multiple+sum)/2);

// Question 6
// 0-dan 100-ə qədər ədədlərdən 10 və ya 70 istisna olmaqla digərlərini ekranda string formasında çap edin

// let str;
// for(i=0;i<100;i++){
//     if(i ==10 || i==70){
//         continue;
//     }

//     str=i.toString();
//     console.log(str + " " + typeof(str));
// }



// Question 7
// 0-dan 100-ə qədər ədədlərdən 20dən kiçik və 50-dən böyük olanların ayrılıqda cəmini hesablayəın

// let minSum = 0;
// let maxSum = 0;
// for(i=0;i<100;i++){
//     if(i<20){
//         minSum +=i;
//     }
//     else if(i>50){
//         maxSum +=i;
//     }

// }

// console.log("20-den kicik ededlerin cemi :" + " " + minSum + " " + "50-den boyuk ededlerin cemi:" + " " + maxSum );


// Question 8
// 1-den 9-a qeder olan ededleri ekrana cixarin

// for(i=1;i<9;i++){
//     console.log(i);
// }

// output --> 1,2,3,4,5,6,7,8


// Question 9
// 1-den 50-e qeder olan ededlerin cemini tapin

// let sum = 0;
// for(i=1; i<50;i++){
//     sum += i;
// }

// console.log(sum);

// output --> 1225




// Question 10
// 2 ve 36 arasinda olan ededlerden 4 ve 17-den baska hamisini ekrana cixarin
// for(i=2;i<36;i++){
//     if(i==4 || i==17){
//         continue;
//     }
//     console.log(i);
// }
