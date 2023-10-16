function reverseTheSentence(sentence) {
    const words = sentence.split(" ");
    const reversedWords = words.map(word => {
        return word.split("").reverse().join("");
    });
    const finalSentence = reversedWords.join(" ");
    return finalSentence;
}

const sentence = "This is a sunny day";
console.log(reverseTheSentence(sentence));
