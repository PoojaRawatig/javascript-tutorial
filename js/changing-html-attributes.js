// function changeImage(){
//     let image = document.getElementById("productImage");
//     image.src="../media/product2.jpg"
// }


//generate random image
function changeImage(){
    let imageArray = ['product1','product2','product3','product4','product5']
    let randomNumber = Math.floor(Math.random()*4);
    imagePath = "../media/" + imageArray[randomNumber] + ".jpg";
    let image = document.getElementById("productImage");
    image.src=imagePath
}