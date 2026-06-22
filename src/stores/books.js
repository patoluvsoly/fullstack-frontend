import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBooksStore = defineStore('books',  {
   state: () => {
     const books = {
         0:{
             id:1,
             Image:"/Book.image-1.jpg",
             name: "bound in inked flame",
             price: 1800,
             description:"The book details how organizations can solve complex problems by balancing human desirability, technical feasibility, and economic viability through empathy, radical collaboration, and rapid prototyping.",
             author:"Tim Brown",
             long_description:"",
             genre:"",
             rating: 4
     
         },
     
          1:{
             id:2,
             Image:"/Book.image-2.jpg",
             name: " The lasy vow",
             price: 2035,
             description:"Argues how the occult is a rational symbolic system where human willpower interacts with cosmic forces",
             author:"Richard Cavendish",
             long_description:"",
             genre:"",
             rating: 4
         },
     
          2:{
             id:3,
             Image:"/Book.image-3.jpg",
             name: "Writing you in the snow",
             price: 2200,
             description:"Describes art as a perception: Creativity is a state of awareness. ",
             author:"Rick Rubin",
             long_description:"",
             genre:"",
             rating: 4
     
         },
     
          3:{
             id:4,
             Image:"/Book.image-4.jpg",
             name: "INTO THE FOREST",
             price: 1600,
             description:"The Lost Symbol is a lightning-paced thriller based on kidnapping.",
             author:"Dan Brown",
             long_description:"",
             genre:"",
             rating: 4
         },
     
          4:{
             id:5,
             Image:"/Book.image-5.jpg",
             name: "Once Upon A Broken Heart",
             price: 1550,
             description:"Evangeline Fox strikes a dangerous bargain with the immortal Prince of Hearts to stop a wedding — and discovers love and curses are more tangled than she ever expected..",
             author:"Stephanie Garber",
             long_description:"After being heartbroken and humiliated, Evangeline Fox makes a deal with Jacks, the charming and dangerous Prince of Hearts, in a desperate attempt to stop the wedding of the man she loves. But Jacks' help comes with a price, and Evangeline soon finds herself pulled into a world of curses, magic, and dark fairy-tale bargains where nothing — including her own heart — is what it seems.",
             genre:"Fantasy, Romance, Young Adult",
             rating: 4
         },
     
          5:{
             id:6,
             Image:"/Book.image-6.jpg",
             name: "Jack London",
             price: 1675,
             description:"A poor sailor educates himself and chases literary fame to win the heart of a woman above his social class — only to find success emptier than he imagined.",
             author:"Martin Eden",
             long_description:"Martin Eden is a self-taught sailor from a working class background who falls in love with Ruth Morse, a young woman from a wealthy, educated family. Determined to prove himself worthy of her, he throws himself into reading and writing, eventually becoming a successful author. But as he climbs into the world of wealth and intellect he once admired, he grows disillusioned with the very success and social class he fought so hard to reach. Semi-autobiographical, the novel is widely read as Jack London's reflection on ambition, class, and the hollowness he found in fame.",
             genre:"Classics, Fiction, Literary Fiction",
             rating: 4
         },
     
          6:{
             id:7,
             Image:"/Book.image-7.jpg",
             name: "Where Are You?",
             price: 1775,
             description:"The Lost Symbol is a lightning-paced thriller based on kidnapping.",
             author:"Nikita  Tzortzis",
             long_description:"Part memoir, part philosophy, part love letter to the world — this self-published work blends poetry, personal confession, and reflective storytelling as the author searches for love and meaning while exploring different facets of his own identity.",
             genre:"Poetry, Memoir, Philosophy",
             rating: 4
         },
     
          7:{
             id:8,
             Image:"/Book.image-8.jpg",
             name: "Before The Coffee Gets Cold",
             price: 1600,
             description:"In a small Tokyo café, customers can travel back in time — but only if they return before their coffee gets cold.",
             author:"Toshikazu Kawaguchi.",
             long_description:"Set in a Tokyo café where a particular seat lets customers travel back in time, the novel follows four visitors as each confronts a regret from their past — a estranged sister, a husband with dementia, a daughter she never met — under one strict rule: they must return before the coffee gets cold.",
             genre:"",
             rating: 4
         },
     
          8:{
             id:9,
             Image:"/Book.image-9.jpg",
             name: "The God Of Small Things",
             price: 1600,
             description:"In a small town in Kerala, India, twins Estha and Rahel watch a single day unravel their family's life forever.",
             author:"Arundhati Roy",
             long_description:"Set in Kerala, India, the novel follows fraternal twins Estha and Rahel as they navigate a childhood shaped by family secrets, rigid caste boundaries, and a tragic event that changes everything. Roy moves between past and present to slowly reveal how one forbidden love and one terrible day reshaped an entire family, exploring themes of class, love, and loss along the way.",
             genre:"Fiction, Literary Fiction, Historical Fiction",
             rating: 4
         },
     
          9:{
             id:10,
             Image:"/Book.image-10.jpg",
             name: "Behind Closed Doors",
             price: 1600,
             description:"Jack and Grace seem like the perfect couple — until the doors close and the truth about their marriage is revealed.",
             author:"B.A PARIS",
             long_description:"From the outside, Jack and Grace appear to have it all — a beautiful home, a happy marriage, the perfect life. But behind their closed doors lies something far more sinister than anyone suspects. As the story alternates between past and present, the chilling truth about their relationship slowly comes to light, with devastating stakes for Grace.",
             genre:"Psychological Thriller, Mystery",
             rating: 4
         },
     
          10:{
             id:11,
             Image:"/Book.image-11.jpg",
             name: "Harry Potter",
             price: 1600,
             description:"A young boy discovers he's a wizard and is whisked away to a magical school, where he begins to uncover the truth about his past.",
             author:"J.K Rowling",
             long_description:"Harry Potter has spent his life being mistreated by his aunt and uncle, unaware that he is actually a famous wizard in the magical world. On his eleventh birthday, he learns the truth and is invited to attend Hogwarts School of Witchcraft and Wizardry, where he makes lifelong friends, uncovers the mystery of his parents' deaths, and confronts the dark wizard who killed them.",
             genre:"Fantasy, Young Adult, Adventure",
             rating: 4
         },
     
          11:{
             id:12,
             Image:"/Book.image-12.jpg",
             name: "Goodbye Again",
             price: 1600,
             description:"A collection of reflective essays and illustrations on loneliness, burnout, and learning to feel less alone.",
             author:"Jonny Sun",
             long_description:"Part memoir, part illustrated essay collection, Goodbye Again explores themes of loneliness, anxiety, burnout, and connection in the modern world. Jonny Sun blends personal reflection with his signature whimsical drawings to capture the quiet, often unspoken feelings of isolation many people experience — and the small moments of comfort that help us feel less alone.",
             genre:"Essays, Memoir, Nonfiction",
             rating: 4
         },
     
          12:{
             id:13,
             Image:"/Book.image-13.jpg",
             name: "The Courage To be Disliked",
             price: 1600,
             description:"Through a dialogue between a philosopher and a young man, this book introduces Adlerian psychology and argues that true freedom comes from letting go of others' expectations..",
             author:"ICHIRO KISHIMI and FUMITAKE KOGA",
             long_description:"Structured as a conversation between a wise philosopher and a discontented young man, the book introduces the ideas of psychologist Alfred Adler. It argues that much of our unhappiness comes from comparing ourselves to others and seeking their approval, and that real freedom and happiness come from accepting ourselves, letting go of the need to be liked, and taking responsibility for our own choices.",
             genre:"Self Help, Psychology, Philosophy",
             rating: 4
         },
     
          13:{
             id:14,
             Image:"/Book.image-14.jpg",
             name: "The Catcher In The Rye",
             price: 1600,
             description:"A disillusioned teenager named Holden Caulfield wanders New York City over a few days, grappling with alienation and growing up..",
             author:"J.D SALINGER",
             long_description:"After being expelled from prep school, sixteen-year-old Holden Caulfield wanders New York City alone for a few days before returning home. Through his cynical, often funny narration, the novel captures his struggle with grief, alienation, and the painful transition from adolescence into adulthood, becoming one of the most widely read coming-of-age novels of the 20th century.",
             genre:"Classics, Fiction, Coming-of-Age",
             rating: 4
         }
     }  
       const selectedBook = ref(null)

       return{
           books,
           selectedBook
       }
   },
   actions:{
       updateSelectedBook (payload) {
           this.selectedBook = payload
       },
   },
   persist: true,
})