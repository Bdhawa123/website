import React, { useState } from "react";
import SixthPageOnClick from "./SixthPageOnClicked";
import { CSSTransition } from "react-transition-group";
import "../../styles/SixthPage.css";
import movies from "./../jsonFiles/home/movies/movies";

// const movies = [
//   {
//     titleName: "First They Killed my Father",
//     Description:
//       "Cambodian film First They Killed My Father, streamed in Netflix is anAnjelina Jolie directed and written film;a remake of the original non-fiction book written by Cambodian author and war survivor Luong Ung. The film is a traumatic story that outlines the statement there are no winners in a war, in a graceful manner.",
//     Photo:
//       "https://res.cloudinary.com/classic-euphemist/image/upload/v1626403873/movies/ftkmf_b8n7z7.jpg",
//     summary: [
//       "We start off in a city which is amidst war where US side has removed their troops from Cambodia and opposing side(North Vietnamese force) are now advancing over the area. Amidst the sense of nationalism sentiment, expressed by people by shouting out slogans in mikes, there is a PIC(Person In Charge) who starts to remove people from celebrating and shouts out that there will be bombs dropped on the neighbourhood forcing everyone to leave their houses and settle in refugee camps.",
//       "Loung Ung’s father, who worked with Khmer Armed Forces, slowly retreats his family and starts heading towards refugee camps. The movie shows the theatrics of war and trauma towards a child who is slowly starting to understand the world. Ung and his family of seven children(three boys, two old enough to get recruited in army, and three daughters where one is old enough to get recruited, and a small boy who is still not big enough to realise life, spoiler alert !!!  The family of seven start their journey towards refugee camps and make it to Ung’s brother in law where his brother’s wife carries anxiety that harbouring them might cause them trouble in the future because Ung worked in the government.",
//       "Sidestory… The armed forces go about praising  some guy with a weird name apparently called Angkar is shown to be rounding up regular folks who worked for the government to a truck and ultimately to their untimely death. For this reason and the safety of his family, Ung discards his identity as a government official and declares that he is just a regular farmer. The forces are shown to be suspicious but they do not figure it out, or are too callous to not be bothered because in the end, we find out that they were eventually killing these natives either by starvation or by making them fight in their war.",
//       "A sign of hope reignites as the family is reunited with their brother-in-law a rural farmer but trouble escalates as the Ung’s brother in law abandons them and send them off their way with a heavy heart, because having Ung was too great of a risk for their family to endure. It is quite sad to see their relative abandoning them in between the wiles of war but they ultimately end up on a concentration camp where the girls cut off their hair, they are asked to color their white t-shirt to muddy as a sign of no class difference in the new community they were creating. Their elder daughter and their elder sons are sent off as new recruits for the army forcefully.",
//       "The children and adults are shown to then be separated as work groups, Children too work in farms and are fed in very feeble quantity, the result of which we see them to be losing weight, The family manages to sneak off a few protein(cockroaches) and rice to feed themselves to prevent their young ones from starvation despite punishments shown given by the army, presumably death for stealing, using western medicine and other things. Once we see Loung’s sister caught eating a few peas and is beaten badly for her crime.",
//       "After a short time after settling in the camp we see Luong’s father, called off to go somewhere, this is shown as a part where they are going to kill of Pa Luong and ask him to bid his farewell to his family, it is one of the most tragic scenes as we see a glimpse of emotions inside of him as he swings into his wife’s arm. He bids them farewell and see Luong calling him to come back but to no avail.",
//       "After a short time, we see Luong’s elder sister who partook in war in a very bad state in the encampment hospital, she is shown to be in critical condition and we see Ma Luong beside her trying her best to convince her it’s going to be okay but ultimately fails as we see her being buried. After a short time, we see that Luong’s small brother starving as he screams he is hungry, Luong and his brother sneak to the forest to get some fruits but are found out. Her brother is beaten badly as the guards manage to break his head. After that Ma Luong is shown to be giving each children their final goods as their will as they are bid off. She gives Luong a photograph of their family, her sister the white cloth she hid, her brother something I don’t really remember. The trio are told to go off and head in different directions. They are asked to go off in orphanage and renounce their names and tell them they are orphans.",
//       "After a period of brainwashing lectures and regular child labour we see Luong is sent off to army encampments where she is being trained to become a fighter. She is trained to use guns and plant off mines. After her overall training success, she is shown to be sent off to visit her sister one more time, but instead visits her mother’s encampment where she finds out to be deserted. Soon after we see a war being fought where Vietnamese side are now being bombed and armies rebelling and rescuing these encampment survivors. Luong is seen to run off in a direction where her sister was being held. She screams out her sister’s name and nearly gives up hope but at the end finds her. She is also reunited with her brother and the trio are seen to be happy in a camp where soldiers are helping the wounded and rescued villagers instead of enslaving.",
//       "But the joy is short lived as we see Vietnamese soldiers attacking the camp bombing camps and citizens and bringing about an open fire on the field. The trio flee off and cross the river only to go cross the mine field where Luong had planted bombs earlier, it is shown that both of her brother and sister survive the mine field and move onto the new camp. A general who had previously captured and enslaved the cambodian side is shown to arrive on their lands, after the war as a captured soldier, something like jamie lanister on the first season of game of thrones, after a lot of anger and mob mentality shown to him by the cambodian side, he is still given a chance to survive by the residing cambodians. Luong seems to recall her father in that man and screams out her father’s name, when the crowd beats him. The movie ends off finally when Luong is shown to be with her sibling who comeback to them after the war. They are shown to be offering their prayers towards their dead parents.",
//     ],
//     critcalSummary: [
//       "The movie falls into the category of one of the age old golden movie which has a seamless flow of emotions and pictures and will get your emotions overturning every now and then. The movie shows the impact of war on a normal citizen , it shows how life happens and things move on, but it is these critical moments of history that we should never forget, as each of the cambodians who suffered probably had their own story but only one of them from all, was able to reach through to us from this movie.",
//       "The movie shows perspective through a small girl’s eyes and how it impacted her, it shows her fears and her numbness as she changed from one situation to another drastically, at the same time it doesn’t fail to show that childish sense that all we humans carry that desperation for the safety of people we love, where Luong eats up all the rice hidden in their stash because she gets scared for her father. The anger she buried deep within her because of her powerlessness and her fear for the system and the safety of her siblings. It shows how in the movie in total impacted her growth, it shows her empathy, love and maturity.",
//       "It also manages to show us the strength of a mother and a female role in a family, Luong’s mother was arguably one of the strongest characters, she was probably stronger than her father considering how she managed to cope with the situation, she continued to look after her children, managed to keep it together despite their situation, she managed to play along with time and change her direction with the wind, in the movie when she realises she cannot feed their children anymore, she manages to come up with a solution despite risking her own safety. She shows how motherly love is structured and how it entails, she was able to save three of her children, at the same time, she had to watch two being carried off to somewhere and two dying. The movie does an impeccable job to show the strength of female parent in the family.",
//       "Finally talking a bit about Luong’s father, the movie manages to show how quick witted and sharp he was, and although he was involved in the government, Luong’s father cherised his family more than anyone else. He is shown as a character who wins the heart of everyone, he is supportive of his family and takes a lot of decision for the well being of his kids. He is shown to have a good sense of direction, it is also shown from the last moments between him and his wife , he was expecting something close to it, had he lived on further, although scarce; the possibility for their family to prosper still exists.",
//     ],
//   },
//   {
//     titleName: "The Platform",
//     Description:
//       "Spanish science fiction-horror film directed by “Galder Gaztelu-Urrutia”, Platform relased in November in 2019 is one of a kind movie that makes the viewers question what the hell is happening here?",
//     Photo:
//       "https://res.cloudinary.com/classic-euphemist/image/upload/v1626446214/movies/platform_g2kqc7.jpg",
//     summary: [
//       "The movie goes into detail where Goreng (the young man) enters and is trained by his new cell mate where he explains what goes on in the cell, what he did to get inside the cell and how the the people above don’t speak to people below and so on because they’re higher level and the trend follows. Although his cellmate looks like a weird old man, it turns out he is a weird old man who tries to feast upon Goreng as we move on. Goreng and his acquaintance start at a cell level of 47 which is relatively higher than the number of cells that are on the building. The base concept of the movie is shown as all the cell mates are trapped in a long tower where top notch food is on a hovering food table is being passed down from top cell to bottom cell once a day, the people at a higher level get to eat fresh food and fill their belly  and the table is passed down, there’s only one problem except for trapped in a cell with only one item of choice, just one person to talk with and etc, and the problem is the people at lower level don’t get enough food because most of the food is already consumed by the people at higher level. Goreng tries to call out at people to get together but quickly gives up hope as people don’t really listen to him.",
//       "He starts to spend time with his old roommate and quickly develops an intimate relationship, kinda. After 30 days of each month, all the cell mates are put to sleep and their level’s are changed without anyone’s knowledge, now to that day Goreng had seen people jumping down because they had gone crazy, but he wakes up to find himself at cell number 171 where he is tied down by his friend to feed upon his flesh because food doesn’t usually that low. His friend starves for the first week and starting from the second week he starts cutting flesh of Goreng, lucky for Goreng, there happens to be a girl who travels down with the platform once every month in search for her child, and because he had shown kindness to her earlier, this psychopathic girl kills the old man and tends to Goreng’s wounds and set sails below. Goreng starts to feed upon the flesh of the old man and it is disgusting, soon after we see him at level 33 with a woman who worked with the administration along with a dog.",
//       "The woman looks hopeful and tries to build hope in other sby advising the people on lower level to eat only on their portion, the woman tries to do this continuously but to no avail until Goreng intervenes and threatens to shit on their food if they don’t oblige. Soon after we see Goreng’s saviour, the psycho girl,  in near death condition delivered on a hovering table, where both he and his new acquaintance, Imoguiri help her to her strength only to find her killing Imoguiri’s dog which is shown to push Imoguiri to a depressive phase.",
//       "As they rotate this time, they find themselves in level 202 where to his surprise he finds Imoguiri had commited suicide, it takes him a few days to get rid of ghosts haunting his head and finally starts feeding on her flesh to save himself. On the next shuffle we see Goreng at level 6 with his new friend Baharat who had successfully climbed up levels to reach level 6, but is stopped by the people at level 5 when he tries to climb up the man above excretes upon his face and is saved by Goreng. Goreng and Baharat decide that they will try to break the system by successfully helping everyone get their share of food by giving each person their own ration. They are met by many challenges and upon having a dialogue with a wise man or an idiot, they decide that a panna cotta, a perfectly presented dish that reaches level 0, the highest level will be a message to set everyone free. The duo fight their way and at level 333, the lowest level, they see that they have reached the final level only to see the young girl, Inougiri was searching for hiding below the bench. They abandon their mission and feed pana cotta to the little girl, At this point both men had taken fatal injuries, so Baharat dies and Goreng ascends the platform one more time next day to help the girl on the platform, it is shown he climbs off the platform and sends the girl on her way to top most level. It is unknown whether he survives or not but he casually walks it off saying the girls guardian need not go with her and walks off with the ghost of the old man man who he killed when he was being killed.. err its confusing.",
//     ],
//     critcalSummary: [
//       "	The movie can be very much related to normal human system where we have created a system of world order where people born in rich countries get a lot of privilege of being born at the same time we see a lot of people suffering in poor countries starving for food and other necessities, the movies doesn’t exactly relate with this but it seems this is the closest fit to the whole movie that I personally could find, and although it gives your mind a sense of curiousity but it pretty much gives you an ending that leaves you to wonder what the hell was that all about ????",
//     ],
//   },
//   {
//     titleName: "Weathering with you",
//     Description:
//       "Japanese animated fantasy/romance movie written and directed by Makoto Shinkai, “Weathering with you” released in July of 2019 is a romantic movie where love defies the odds of divine interpretation to screw up your regular weather phenomena.",
//     Photo:
//       "https://res.cloudinary.com/classic-euphemist/image/upload/v1626585394/movies/Weathering_with_You_Poster_yt5t0f.jpg",
//     summary: [
//       "Hodaka is an urban boy who’s about 16 years old and goes to Tokyo in a ship, where he is saved by a creepy guy, Keisuke Suga, when he almost gets sweeped off the ship by a tidal wave. The creepy guy rips Hodaka off and gives his card to contact him if he needs help. Hodaka goes around the city of Tokyo in search of a Job and uses Yahoo ask for some reason to find answers, like where to find a job, what to do in life, and all that. He should’ve used a better platform is all I’m saying.",
//       "More into the movie, after failing at finding job, Hodaka gets depressed, becomes homeless finds a gun, keeps it  and goes to a Burger shop where he meets Hina, beautiful girl working at a burger joint, he gets a free burger from Hina and takes off to call Keisuke Suga, where he finds out the creepy guy is actually creepy but in a good way, Keisuke takes pity on Hodaka and gets him a job to find more about something to write, they find a folklore called sunshine girl, he gives Hodaka shelter and asks him to help his niece Natsumi suga , which we find out pretty much late in the movie, to search for a sunshine girl, the duo go on multiple interviews with a lot of different people until finally when Hodaka stumbles onto a girl being molested by a bunch of different people.",
//       "He looks carefully and to his surprise finds out the girl is actually Hina and takes her hand and runs away with her. The molesters follow him and start to beat him off, Hodaka then takes his gun out and open fires in the air. The molester pees his pants and Hina and Hodaka run away and make out, naah just kidding.",
//       "Hina explains to Hodaka that she was actually trying to sell herself to make some money ; after the death of Hina’s mother Hina had been trying to raise herself and her brother on her own,  the duo go onto a sky temple, which is shown on top of a ghost house where Hina prays to clear off the sky and to Hodaka’s surprise the sky actually does clear off. He starts to pursue this Business of creating a website to clear off weather and the duo get a good business deals as they land in a lot of jobs.",
//       "Hodaka buys Hina a ring and waits to propose to her, in the mean time Keisuke and Suga find out from an old monk that sunshine girls are infact real and were meant to be sacrifices to clear off the weather in the old times. In the mean time we see the molesters who were trying to get money out of Hina being confronted by police to find out where Hodaka is because  his parents had apparently filed for a missing person case and police were trying to find more about him. The police confront Keisuke and Hina, where Hina is threatened to be sent off to child care because she is a minor, Keisuke asks Hodaka to go back home and the issue will be settled off, he gives him a generous payment but Hodaka doesn’t go back, he goes with Hina and her brother and try to live in different hotels. They’re eventually confronted when by police when they try to find a hotel but Hina prays to the gods and a thunderbolt hits off a truck causing a disruption in the crowd. The trio go off inside a Hotel where they sing, laugh and have a delicious meal.",
//       "Hina shows Hodaka that she’s going to dissappear eventually when Hodaka gifts her a ring for her birthday and confesses his love for her.  In the morning Hodaka has dream where Hina is gone and to his surprise, Hina actually dissappears with weather cleared off. The police come to their room at this time and capture Hodaka and Hina’s brother. Hodaka now being confronted by police finds out that he was the oldest one and Hina was actually a minor aged 15. He escapes the police and tries to run to the sky temple in a heroic attempt, where he is helped by Suga but upon reaching the ghost house Keisuke intervenes and asks him to go back instead. The police arrive at the site and point a gun at Hodaka, talk about stupidity in handling kids and instead of letting him going to the top of the roof try to stop him by cuffing him and beating the crap out of him. Keisuke at this point overwhelmed with emotion and punches the police officer. Hodaka climbs to the temple and has an inter dimensional travel with heart provoking emotional music playing in the background and is ultimately able to bring Hina back as we see some lightning in the background and the downpour of rain beginning  again.",
//       "We then fast forward to the scene where Hodaka is now all grown up and wants to go back to Tokyo but hasn’t really been in touch with Hina,he visits Keisuke, he goes to Hina’s house and finds Hina praying and the duo is finally reunited in midway but Tokyo is now in an ocean and looks kinda sad, well at least they don’t sacrifice a kid for mistakes made by one too many pompous old twats who were too much over their head with money making mindset in exchange for disastrous outcome in nature itself, maybe we should think about that too.",
//     ],
//     critcalSummary: [
//       "The movie pretty much  reflects upon how children are actually restricted to some extent to grow out on their own, although we’ve advanced from those ape like monkeys, we have somehow restricted ourselves of our primary need as animals, our freedom and as a social animal it is seems quite different to see ourselves as how getting a job for a 16 year old kid can be extremely difficult to the extreme that he goes homeless and how a 15 year old can actually see the evils existing within our societies such as justice systems such as social care can actually traumatise children by separating children, also we see that the world is completely a screwed up place and well no one really cares so we should all do the same and mind our own business … ",
//     ],
//   },
//   {
//     titleName: "Movie 4",
//     Description: "shortDescription",
//     Photo: "url",
//     summary: "MovieSummary",
//   },
//   {
//     titleName: "Movie 5",
//     Description: "shortDescription",
//     Photo: "url",
//     summary: "MovieSummary",
//   },
//   {
//     titleName: "Movie 5",
//     Description: "shortDescription",
//     Photo: "url",
//     summary: "MovieSummary",
//   },
// ];

const randomColor = [
  "#322E2E",
  "#E96868",
  "#C4C4C4",
  "#67765E",
  "#833346",
  "#c47f3f",
];

const SixthPage = () => {
  const [togglePage, setTogglePage] = useState(false);
  const [PageProps, setPageProps] = useState({});

  const TogglePage = () => {
    setTogglePage(!togglePage);
    if (!togglePage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <div>
      <div className="titleMoviePage">MOVIES</div>

      <div className="movieContainer">
        {movies.map((movie, index) => {
          return (
            <div
              className="movieCard"
              style={{ backgroundColor: randomColor[index] }}
              onClick={() => {
                TogglePage(true);
                Object.assign(movie, { Color: randomColor[index] });
                setPageProps(movie);
              }}
            >
              <div className="cardTitle">{movie.titleName}</div>
              <div className="cardImg">
                <img src={movie.Photo} alt="" />
              </div>
              <div className="description">{movie.Description}</div>
            </div>
          );
        })}
      </div>

      {/* {togglePage === true ? ( */}
      <CSSTransition
        in={togglePage}
        classNames="fade"
        onEnter={() => {
          setTogglePage(true);
        }}
        onExited={() => {
          setTogglePage(false);
        }}
        timeout={300}
        unmountOnExit
      >
        <SixthPageOnClick
          // titleName={PageProps.titleName}
          // description={PageProps.Description}
          // summary={PageProps.summary}
          // url={PageProps.Photo}
          // Color={PageProps.Color}
          movie={PageProps}
          TogglePage={TogglePage}
        />
      </CSSTransition>
      {/* ) : null} */}
    </div>
  );
};

export default SixthPage;
