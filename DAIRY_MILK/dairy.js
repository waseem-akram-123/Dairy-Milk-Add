const btn = document.querySelector  ("#btn");

function getData (information){

    return new Promise ((resolve,reject)=>{
        setTimeout (()=>{
            console.log (information);
            resolve (information);
        },1500);
    });
}
// async await
const printInfo = async ()=>{
    let p1 = document.querySelector ("#one");
    let p2 = document.querySelector ("#two");
    let p3 = document.querySelector ("#three");
    let p4 = document.querySelector ("#four");
    let p5 = document.querySelector ("#five");
    let p6 = document.querySelector ("#six");
    let p7 = document.querySelector ("#seven");
    let p8 = document.querySelector ("#eight");

    p1.innerHTML = await getData ("Kiss Me");
    p2.innerHTML = await getData ("Close Your Eyes");
    p3.innerHTML = await getData ("And Miss Me");
    p4.innerHTML = await getData ("I Can Read Your Lips");
    p5.innerHTML = await getData ("On Your Fingertips");
    p6.innerHTML = await getData ("I Can Feel Your Lips");
    p7.innerHTML = await getData ("Come On My Lips");
    p8.innerHTML = await getData ("And Happiness In Your Eyes");
}
btn.addEventListener ("click", ()=>{
    printInfo();
})