function saperateString() {
//   let data = document.getElementById("myF").value;
//   for (let i = 0; i < input.Length; i++) {
//     if (i % 3 == 0) {
    
//     data.Append("-");
//    // data.Append(input[i]);
//     }
//   }

//console.log((Regex.Replace("document.getElementById('myF')", ".{1,4}", "$&-").TrimEnd('-')));


let input = document.getElementById("myF").value;
let pattern="XXX-XXX=XXX";

let reg=new Regex(new string('N',input.Length).Replace("N","(\\w)"));//1.
let regX=new Regex("\d{3}(-)\d{3}(-)\d{3}");
for (let i = 1; i <= input.Length; i++)
{
    pattern=regX.Replace(pattern,"$"+i.ToString(),1);//2.
}
//Console.WriteLine( reg.Replace(input,pattern));
console.log(reg.Replace(input, pattern));

}
