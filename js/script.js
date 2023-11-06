// ! შევქმენი ყუთები(ცვლადები) რომლებზეც მინდა რომ ვიმოქმედო და დავაკავშირე Id-ის საშუალებით 
let navigation_block = document.getElementById("navigation-block");
let burger_block = document.getElementById("burger-block");
// ! გაიწერება რა მოქმედებაზე (მაუსის დაჭერაზე მაგალითად), რა შედეგი, მოქმედება უნდა გააკეთოს
burger_block.addEventListener("click", function () {
    navigation_block.classList.toggle("navigation-for-burger");
});
