

interface AudioPlayer {
    audioVolumen: number;
    soungDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlaper: AudioPlayer = {
    audioVolumen: 90,
    soungDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015,
    }
}

const { song:anotherSong, soungDuration:duration, details } = audioPlaper; 
const { author } = details;

// console.log("Song: " + anotherSong);
// console.log("Duration: " + duration);
// console.log("Autor: " + author);

const [, , trunks = 'notFound']: string[] = ['Goku', 'Vegeta'];

console.log('personaje 3: ', trunks)
