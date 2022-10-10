export const quizDataLoader = async() =>{
    const quizData = await fetch('https://openapi.programming-hero.com/api/quiz');
    const quizCategory = await quizData.json();

    return quizCategory;
}